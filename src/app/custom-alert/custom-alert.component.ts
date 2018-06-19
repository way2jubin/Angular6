import { Component, OnInit } from '@angular/core';
import { CustomAlertSService } from '../custom-alert-s.service';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {
  errmsg
  constructor(private _alServ: CustomAlertSService) { }

  ngOnInit() {
    this._alServ.getAlert().subscribe(res => {
      this.errmsg = res;
      setTimeout(() => {
        this.errmsg = "";
      }, 2000);
    });
  }

}
