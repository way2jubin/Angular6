import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private _ajaxS: AjaxService) { }
  busjson
  ngOnInit() {
    this._ajaxS.getHttpBusList().subscribe(res=>{
      if(res["success"] == 1){
        this.busjson = res["result"];
        //console.log(this.busjson);
      }
    });
  }

}
