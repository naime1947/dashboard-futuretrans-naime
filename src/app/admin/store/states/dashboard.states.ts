import { CatFactModel, WeatherModel } from '../models';

export interface DashboardState {
  fact: CatFactModel[];
  weather: WeatherModel[];
}
