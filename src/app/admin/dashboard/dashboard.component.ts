import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   filterForm: any = FormGroup;
   isFilterSubmit: boolean = false;
   get filterControl() {
      return this.filterForm.controls
   }

   constructor(
      private dataService: DataService,
      private fb: FormBuilder,
      private utilsService: UtilsService,
   ) {
      this.filterForm = this.fb.group({
         lat: ['', [Validators.required]],
         lng: ['', [Validators.required]],
         date: ['', [Validators.required]],
      })
   }

   ngOnInit(): void {
      this.getCatFactInfo();
      this.getSunriseSunsetInfo('lat=36.7201600&lng=-4.4203400&date=2023-12-04');
   }

   // Cat Fetch Info
   public catFetchInfo: any;
   public getCatFactInfo() {
      this.dataService.getCatFactInfo().subscribe({
         next: (res) => {
            this.catFetchInfo = res;
         },
         error: (err) => { console.log(err) }
      })
   }

   public reloadCatFact() {
      this.getCatFactInfo();
   }

   // Sunrise / Sun Set Info
   public sunriseSunsetInfo: any;
   public getSunriseSunsetInfo(params: string) {
      this.dataService.getSunriseSunsetInfo(params).subscribe({
         next: (res) => {
            this.sunriseSunsetInfo = res;
            console.log(this.sunriseSunsetInfo)
         },
         error: (err) => { console.log(err) }
      })
   }

   @ViewChild('closeModal') closeModal!: ElementRef;
   public submitFilter() {
      this.isFilterSubmit = true;
      if (this.filterForm.invalid) {
         return;
      }

      this.getSunriseSunsetInfo(this.utilsService.params(this.filterForm.value));

      this.closeModal.nativeElement.click();

      this.filterForm.reset();
      this.isFilterSubmit = false;
   }



}
