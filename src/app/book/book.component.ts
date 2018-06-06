import { Component, OnInit } from '@angular/core';
import { DatamanageService } from '../datamanage.service';
import { Router } from '@angular/router';
import { NotificationCenter } from 'ngx-notification-center';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _d: DatamanageService, private _r: Router, private _n:NotificationCenter) { }
  selectedforbook
  selectedseats
  totalamount = 0
  gstpercentage
  paytype =1;
  ibank1 = 2;
  ngOnInit() {
    console.log(this._d.selectedbus);
    if (this._d.selectedbus) {
      this.selectedforbook = this._d.buslist.find(k => k.id == this._d.selectedbus);
      this.selectedseats = this.selectedforbook.seats.filter(k => k.selected == true);
      this.totalamount = this._d.totalprice;
      this.gstpercentage = this._d.gstpercentage
      console.log(this.totalamount)
    }
  }
  purchaseTicket() {
    console.log(this.ibank1);
    let myuserid = this._d.loginuser>0?this._d.loginuser:1;
    for (let ss of this.selectedforbook.seats) {
      if (ss.selected) {
        //console.log(ss +' '+myuserid);
        ss.bookedby = myuserid;
        ss.selected = false;
        //console.log(ss);
      }
    }
    this._n.success("Ticket booked successfully");
    setTimeout(()=>{
      this._r.navigate(['search']);
    },500);
  }
}
