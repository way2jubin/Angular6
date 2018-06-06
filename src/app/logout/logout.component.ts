import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatamanageService } from '../datamanage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _route: Router,private dtaobj:DatamanageService) { }

  ngOnInit() {
    this.dtaobj.logoutUser();
    this._route.navigate(['login']);
  }

}
