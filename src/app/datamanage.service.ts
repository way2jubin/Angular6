import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatamanageService {
  users = [
    { id: 1, username: 'user1', password: '123456' },
    { id: 2, username: 'user2', password: '123456' },
    { id: 3, username: 'user3', password: '123456' }
  ];
  // login user id
  loginuser = 0;
  searcbus
  selectedseats
  selectedbus
  gstpercentage = 20;
  totalprice
  // routefrom
  buslist /* = [
    {
      id: 1, name:'Scania', frm: 'Tvm', to: 'Ers', on: '6/1/2018',amt:100, seats: [
        {
          sid: 1,
          bookedby: 0,
          selected:false
        },
        {
          sid: 2,
          bookedby: 0,
          selected:false
        },
        {
          sid: 3,
          bookedby: 0,
          selected:false
        },
        {
          sid: 4,
          bookedby: 0,
          selected:false
        },
        {
          sid: 5,
          bookedby: 0,
          selected:false
        },
        {
          sid: 6,
          bookedby: 0,
          selected:false
        },
        {
          sid: 7,
          bookedby: 0,
          selected:false
        },
        {
          sid: 8,
          bookedby: 0,
          selected:false
        },
      ]
    },
    {
      id: 2,name:'Volvo', frm: 'Tvm', to: 'Ers',amt:50, on: '6/1/2018', seats: [
        {
          sid: 1,
          bookedby: 0,
          selected:false
        },
        {
          sid: 2,
          bookedby: 0,
          selected:false
        },
        {
          sid: 3,
          bookedby: 0,
          selected:false
        },
        {
          sid: 4,
          bookedby: 0,
          selected:false
        },
      ]
    }
  ]; */
  constructor() { }
  validateuser(uname, pass) {
    let uid = this.users.find(val => val.username == uname && val.password == pass);
    if (uid != undefined) {
      this.loginuser = uid.id
      return this.loginuser;
    } else {
      return 0;
    }
  }
  logoutUser() {
    this.loginuser = 0;
  }
  // function for search
  searchRouteBuskeys(frm,to,dateon){
    let obj = {frm:frm,to:to,dateon:dateon};
    this.searcbus = obj;
  }
  filterBus(){
    if(this.searcbus){
      //debugger;
      return this.buslist.filter(k=>k.frm==this.searcbus.frm && k.to==this.searcbus.to && k.on==this.searcbus.dateon);
    }else{
      return;
    }
  }
  updateSelectedSeats(sseatarr){
    let busrow = this.buslist.find(k=>k.id == this.searcbus)
    //busrow.seats = sseatarr;
    console.log(this.buslist);
  }
  updateSelectedBus(busis){
    this.selectedbus = busis;
  }
}
