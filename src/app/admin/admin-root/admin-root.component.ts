import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.scss']
})
export class AdminRootComponent {
  
  constructor() { }

  ngOnInit(): void {
  }

  isExpanded:boolean = true;
  expandSidebar(event:boolean){
    this.isExpanded = event
  }

}
