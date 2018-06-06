import { Component } from '@angular/core';
import { DatamanageService } from './datamanage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private _d:DatamanageService){
    
    //console.log(this.islogin)
  }
  onChange(){
    this._d.loginuser
  }
}
