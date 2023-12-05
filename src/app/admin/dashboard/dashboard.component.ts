import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { UtilsService } from 'src/app/service/utils.service';

import { Store } from '@ngrx/store';
import * as catFactSelector from '../store/selectore/dashboard.selectors';
import * as catFactActions from '../store/actions/dashboard.actions';
import { DashboardState } from '../store/states/dashboard.states';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();
  filterForm: any = FormGroup;
  isFilterSubmit: boolean = false;
  get filterControl() {
    return this.filterForm.controls;
  }

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private store: Store<DashboardState>
  ) {
    this.filterForm = this.fb.group({
      lat: ['36.7201600', [Validators.required]],
      lng: ['-4.4203400', [Validators.required]],
      date: ['2023-12-04', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getSunriseSunsetInfo(this.utilsService.params(this.filterForm.value));
    this.getCatFactInfo();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // Cat Fetch Info
  public catFetchInfo: any;
  public getCatFactInfo() {
    this.store
      .select(catFactSelector.getDashboard)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.catFetchInfo = res.fact;
      });
    if (this.catFetchInfo.length === 0) {
      this.store.dispatch(catFactActions.CatFactDataLoadedAction());
    }
  }

  // Reload
  public reloadCatFact() {
    this.store.dispatch(catFactActions.CatFactDataLoadedAction());
  }

  // Sunrise / Sun Set Info
  public sunriseSunsetInfo: any;
  public getSunriseSunsetInfo(params: string) {
    console.log(params);
    this.store.select(catFactSelector.getDashboard).subscribe((res) => {
      this.sunriseSunsetInfo = res.weather;
    });
    if (this.sunriseSunsetInfo.length === 0) {
      this.store.dispatch(
        catFactActions.WeatherDataLoadedAction({ params: params })
      );
    }
  }

  @ViewChild('closeModal') closeModal!: ElementRef;
  public submitFilter() {
    this.isFilterSubmit = true;
    if (this.filterForm.invalid) {
      return;
    }

    this.store.dispatch(
      catFactActions.WeatherDataLoadedAction({
        params: this.utilsService.params(this.filterForm.value),
      })
    );

    this.closeModal.nativeElement.click();

    this.filterForm.reset();
    this.isFilterSubmit = false;
  }
}
