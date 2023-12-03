import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {

  @Output() emitSidebar = new EventEmitter<boolean>();
  isShowSidebar:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar(){
    this.isShowSidebar = !this.isShowSidebar
    this.emitSidebar.emit(this.isShowSidebar)
  }

  // Dropdown
  public isDropdown:boolean[]=[];
  public showDropdown(arg:number){
    this.isDropdown[arg] = !this.isDropdown[arg]
  }

  public hideNotificationDropdown(arg:number){
    this.isDropdown[arg] = false
  }
  public hideLogoutDropdown(arg:number){
    this.isDropdown[arg] = false
  }
  public hideSearchInput(arg:number){
    this.isDropdown[arg] = false
  }



}
