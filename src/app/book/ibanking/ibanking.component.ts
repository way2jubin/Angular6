import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ibanking',
  templateUrl: './ibanking.component.html',
  styleUrls: ['./ibanking.component.css']
})
export class IbankingComponent implements OnInit {

  banks = [
    {"id":1,"name":"SBI","fees":0,"selected":true},
    {"id":2,"name":"ICICI","fees":0.8,"selected":false},
    {"id":3,"name":"HDFC","fees":0.5,"selected":false},

  ];
  ibank1=1;
  constructor() { }
  @Input() totalprice;
  @Output() payevent = new EventEmitter();
  ngOnInit() {
  }
  paynow(){
    this.payevent.emit();
  }

}
