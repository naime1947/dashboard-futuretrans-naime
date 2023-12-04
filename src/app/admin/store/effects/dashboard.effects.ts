import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as catFactActions from '../actions/dashboard.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
@Injectable()
export class DashboardEffects {

    constructor(
        private actions: Actions,
        private dataService: DataService,
    ) { }

    catFactsData = createEffect(() =>
        this.actions.pipe(
            ofType(catFactActions.CatFactDataLoadedAction),
            mergeMap(() => {
                return this.dataService.getCatFactInfo().pipe(
                    map((res: any) => {
                        return catFactActions.CatFactDataLoadedSuccessAction({
                            fact: res,
                        });
                    }),
                    catchError(({ error }) => {
                        return of(
                            catFactActions.CatFactDataLoadedFaileAction({
                                error: error,
                            })
                        );
                    })
                );
            })
        )
    );

    weatherData = createEffect(() =>
        this.actions.pipe(
            ofType(catFactActions.WeatherDataLoadedAction),
            mergeMap((params:any) => {
                return this.dataService.getSunriseSunsetInfo(params.params).pipe(
                    map((res: any) => {
                        return catFactActions.WeatherDataLoadedSuccessAction({
                            weather: res,
                        });
                    }),
                    catchError(({ error }) => {
                        return of(
                            catFactActions.WeatherDataLoadedFaileAction({
                                error: error,
                            })
                        );
                    })
                );
            })
        )
    );

}