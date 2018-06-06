import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor() { }
  @Input() totalprice;
  @Output() payevent = new EventEmitter();
  ngOnInit() {
  }
  paynow(){
    this.payevent.emit();
  }

}
