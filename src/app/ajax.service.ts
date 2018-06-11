import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { ClassBusdata } from './classes/classbusdata';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private _http: HttpClient) { }
  base_url = "http://localhost/training/server/api/";
  getHttpBusList(){
    return this._http.get(this.base_url+"getBusList");
  }
  searchBus(from,to,date){
    let postdata = {from:from,to:to,date:date};
    //console.log(postdata);
    return this._http.post(this.base_url+"searchbus",postdata).map(res =>this.formatData(res))
    .catch(this.CatchErr);
  }
  CatchErr(er) {
    return Observable.throw(er);
  }
  formatData(res) {
    console.log(res)
    let ss = res["result"].map(this.assignClass)
    return ss;
  }
  assignClass(data) {
    console.log(data)
    let cc = new ClassBusdata();
    cc.id = data.id;
    cc.amt = data.amt;
    cc.frm = data.frm;
    cc.name = data.name;
    cc.on = data.on;
    cc.to = data.to;
    cc.seats = data.seats;
    return cc;
  }
}

class formatBus{
  id:number
}