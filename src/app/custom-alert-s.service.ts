import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomAlertSService {
  xxx
  alertmsg = new Subject<any>();
  constructor() { }
  setAlert(msg) {
    this.alertmsg.next(msg);
  }
  getAlert(){
    return this.alertmsg.asObservable();
  }
}
