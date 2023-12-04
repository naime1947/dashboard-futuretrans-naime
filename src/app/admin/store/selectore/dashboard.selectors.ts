import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../states/dashboard.states';

export const getDashboardState = createFeatureSelector<DashboardState>('dashboardState');

export const getDashboard = createSelector(
  getDashboardState,
  (state: DashboardState) => state
);
