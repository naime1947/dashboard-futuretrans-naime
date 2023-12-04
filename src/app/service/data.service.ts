import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getCatFactInfo(): Observable<any>{
    const URL = 'https://catfact.ninja/fact';
    return this.http.get(URL)
  }
  
  getSunriseSunsetInfo(params:string): Observable<any>{
    // https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2023-12-04
    const URL = `https://api.sunrise-sunset.org/json?${params}`;
    return this.http.get(URL)
  }
}
