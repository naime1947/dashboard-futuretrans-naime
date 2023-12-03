import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    // private authService: AuthServiceService,
    private router: Router
  ) {
    this.logedInForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(5)]],
    })
   }

  ngOnInit(): void {}

  login(){
    this.isLoginSubmit = true;
    if(this.logedInForm.invalid){
      return;
    }
    console.log(this.logedInForm.value);
    
    // this.authService.login(this.logedInForm.value.role).subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //     this.router.navigate(['/admin'])
    //   },
    //   error:(error)=>{
    //     console.log(error)
    //   }
    // })
    this.logedInForm.reset();
    this.isLoginSubmit = false;
  }

}
