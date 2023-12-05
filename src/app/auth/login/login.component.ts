import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logedInForm:any = FormGroup;
  isLoginSubmit:boolean = false;
  get loginControl(){
    return this.logedInForm.controls
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
  ) {
    this.logedInForm = this.fb.group({
      username: ['',[Validators.required]],
    })
   }

  ngOnInit(): void {}

  login(){
    this.isLoginSubmit = true;
    if(this.logedInForm.invalid){
      return;
    }
    console.log(this.logedInForm.value);

    this.authService.login(this.logedInForm.value.username).subscribe({
      next:(res)=>{
        this.toastrService.success('Login Success!', 'Success');
        this.router.navigate(['/admin'])
      },
      error:(error)=>{
        this.toastrService.error('Something went wrong!', 'Faile');
      }
    })
    this.logedInForm.reset();
    this.isLoginSubmit = false;
  }

}
