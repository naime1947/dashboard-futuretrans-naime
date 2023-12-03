import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'', component: AdminRootComponent, children:[
    {path:'', component: DashboardComponent},
    {path:'contact', component: ContactComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
