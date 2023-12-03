import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthRootComponent } from './auth-root/auth-root.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    AuthRootComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
