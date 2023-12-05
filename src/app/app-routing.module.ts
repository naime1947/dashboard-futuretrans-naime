import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {
    path:'admin',
    canActivate:[AuthGuard],
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
