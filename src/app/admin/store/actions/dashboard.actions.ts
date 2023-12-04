import { createAction, props } from '@ngrx/store';
import { CatFactModel, WeatherModel } from '../models';

export const CatFactDataLoadedAction = createAction('[CAT] Data load');
export const CatFactDataLoadedSuccessAction = createAction('[CAT] Data load success', props<{ fact: CatFactModel[] }>());
export const CatFactDataLoadedFaileAction = createAction('[CAT] Data load failure', props<{ error: any }>());


export const WeatherDataLoadedAction = createAction('[WEATHER] Data load', props<{ params: string }>());
export const WeatherDataLoadedSuccessAction = createAction('[WEATHER] Data load success', props<{ weather: WeatherModel[] }>());
export const WeatherDataLoadedFaileAction = createAction('[WEATHER] Data load failure', props<{ error: any }>());