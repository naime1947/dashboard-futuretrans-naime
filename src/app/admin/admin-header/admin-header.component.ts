import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnDestroy {
  destroy$ = new Subject<boolean>();

  @Output() emitSidebar = new EventEmitter<boolean>();
  isShowSidebar:boolean = true

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getLogedInUser();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // Login, Logout Functionality
  public user:string ='';
  public getLogedInUser(){
    this.user  = this.authService.getUser();
  }

  public logout(){
    this.authService.logout().pipe(takeUntil(this.destroy$)).subscribe((res)=>{
      this.toastrService.success('Logout Success!', 'Success');
      this.router.navigate(['/login']);
    });
  }

  // Sidebar UI
  showSidebar(){
    this.isShowSidebar = !this.isShowSidebar
    this.emitSidebar.emit(this.isShowSidebar)
  }

  // Dropdown UI
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
