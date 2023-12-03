import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {

  @Input() isExpanded:boolean = true;

  isLogin = false;
  roleAs: any;

  constructor(
    // public authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void { }


  logout(){
    // this.authService.logout().subscribe({
    //   next:(res:any)=>{
    //     this.router.navigate(['/login'])
    //   },
    //   error:(err)=>{
    //     console.log(err)
    //   }
    // })
  }

}
