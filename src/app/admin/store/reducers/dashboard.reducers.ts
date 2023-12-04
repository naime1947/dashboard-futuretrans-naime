import * as storeActions from '../actions/dashboard.actions';
import { DashboardState } from '../states/dashboard.states';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: DashboardState = { fact: [], weather: [] };

export const catFactReducer = createReducer<DashboardState>(
  initialState,
  
  on(storeActions.CatFactDataLoadedAction, (state)=>({...state})),
  on(storeActions.CatFactDataLoadedSuccessAction, (state, {fact})=>({...state, fact})),
  on(storeActions.CatFactDataLoadedFaileAction, (state, {error})=>({...state, error})),

  on(storeActions.WeatherDataLoadedAction, (state, {params})=>({...state, params})),
  on(storeActions.WeatherDataLoadedSuccessAction, (state, {weather})=>({...state, weather})),
  on(storeActions.WeatherDataLoadedFaileAction, (state, {error})=>({...state, error})),

);

export function catFactReducers(state: DashboardState, action: Action) {
  return catFactReducer(state, action);
}
