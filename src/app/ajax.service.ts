import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private _http: HttpClient) { }
  base_url = "http://localhost/training/server/api/";
  getHttpBusList(){
    return this._http.get(this.base_url+"getBusList");
  }
}
