import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit {

  constructor() { }
  @Input() totalprice;
  @Output() payevent = new EventEmitter();
  ngOnInit() {
  }
  paynow(){
    this.payevent.emit();
  }

}
