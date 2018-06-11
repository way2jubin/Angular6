import { Component, OnInit } from '@angular/core';
import { DatamanageService } from '../datamanage.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import { AjaxService } from '../ajax.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';



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

  constructor(private dataobj: DatamanageService,
    private _r: Router,
    private _datep: DatePipe,
    private _ajax: AjaxService) { }

  busdataresult: any = [];
  ngOnInit() {
    this._ajax.getHttpBusList().map(res=>this.formatData(res)).subscribe(res => {
      console.log(res)
      this.dataobj.buslist = res;
    });
  }
  formatData(res){
    console.log(res)
    let ss = res["result"].map(this.assignClass)
    return ss;
  }
  assignClass(data){
    console.log(data)
    let cc = new formatBus();
    cc.id = data.id;
    return cc;
  }
  searchBus() {
    //console.log(this.Frm +' '+this.To + ' '+ this.onDt);
    let a = new Date(this.onDt);
    let dd = this._datep.transform(a, 'M/d/yyyy');
    //this.onDt = dd;//a.toLocaleDateString(); // we can convert to local date time using this function
    this.dataobj.searchRouteBuskeys(this.Frm, this.To, dd);
    this._r.navigate(['search/result/list']);
  }

}

class formatBus{
  id:number
}
