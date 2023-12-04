export interface WeatherModel {
  results: ResultsModel;
  status: string;
  tzId: string;
}

export interface ResultsModel{
  sunrise:string;
  sunset:string;
  solar_noon:string;
  day_length:string;
  civil_twilight_begin:string;
  civil_twilight_end:string;
  nautical_twilight_begin:string;
  nautical_twilight_end:string;
  astronomical_twilight_begin:string;
  astronomical_twilight_end:string;
}