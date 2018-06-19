import { Component,OnChanges,AfterViewChecked } from '@angular/core';
import { DatamanageService } from './datamanage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,AfterViewChecked {
  title = 'app';
  
  constructor(private _d:DatamanageService){
    
    //console.log(this.islogin)
    this.asd=this._d.loginuser
    
  }
  // onChange(){
  //   this._d.loginuser
  // }
  asd
ngOnChanges(){
//this.asd=this._d.loginuser
}
ngAfterViewChecked(){
  this.asd=this._d.loginuser
}
}
