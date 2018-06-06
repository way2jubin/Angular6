import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DatamanageService } from './datamanage.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  constructor(private datam: DatamanageService, private _routes: Router) { }
  canActivate() {
    //return true;
    if (this.datam.loginuser > 0) {
      return true
    } else {
      this._routes.navigate(['']);
    }
    return false;
  }
}
