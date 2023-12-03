import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ContactComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminRootComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
