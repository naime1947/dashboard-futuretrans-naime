import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRootComponent } from './auth-root/auth-root.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component: AuthRootComponent, children:[
    {path:'', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
