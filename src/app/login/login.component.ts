import { Component, OnInit } from '@angular/core';
import { DatamanageService } from '../datamanage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataobj:DatamanageService,private _route: Router) { }
  username
  password
  ngOnInit() {
    if(this.dataobj.loginuser > 0){
      this._route.navigate(['search']);
    }
  }
  loginuser(){
    let uname = this.username;
    let pass = this.password;
    
    let uid = this.dataobj.validateuser(uname,pass);
    //console.log(uid);
    this._route.navigate(['search']);
  }

}
