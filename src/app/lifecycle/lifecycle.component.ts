import { Component, OnInit, OnChanges, OnDestroy , Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() loginid;
  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("init");

  }
  ngOnChanges() {
    console.log("On change");
  }
  ngOnDestroy() {
    console.log("on destroy");
  }

}
