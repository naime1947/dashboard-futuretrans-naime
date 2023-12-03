import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from "./guard/auth.guard"
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {
    path:'admin',
    // canActivate:[authGuard],
    loadChildren:()=>import("./admin/admin.module").then((m)=>m.AdminModule)
  },
  {
    path:'login',
    // canActivate:[AuthServiceGuard],
    loadChildren:()=>import("./auth/auth.module").then((m)=>m.AuthModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
