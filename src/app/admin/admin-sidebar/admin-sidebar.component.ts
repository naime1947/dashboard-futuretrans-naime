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

  constructor() { }

  ngOnInit(): void { }


  expandSidebar(){
    this.isExpanded = !this.isExpanded;
  }

}
