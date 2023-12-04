import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  
  // Generate query params
  public params(params: any) {
    const result = new URLSearchParams(params).toString();
    return result;
  }

}
