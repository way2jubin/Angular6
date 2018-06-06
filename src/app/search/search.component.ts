import { Component, OnInit } from '@angular/core';
import { DatamanageService } from '../datamanage.service';
import { Router } from '@angular/router';
import { DatePipe} from '@angular/common'
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DatePipe]
})
export class SearchComponent implements OnInit {

  Frm = 'Tvm';
  To = 'Ers'
  onDt = new Date('6/1/2018')

  constructor(private dataobj:DatamanageService,private _r:Router, private _datep: DatePipe) { }

  ngOnInit() {
  }
  searchBus(){
    //console.log(this.Frm +' '+this.To + ' '+ this.onDt);
    let a =  new Date(this.onDt);
    let dd = this._datep.transform(a,'M/d/yyyy');
    //console.log(dd);
    //this.onDt = dd;//a.toLocaleDateString();
    this.dataobj.searchRouteBuskeys(this.Frm,this.To,dd);
    this._r.navigate(['search/result/list']);
  }

}
