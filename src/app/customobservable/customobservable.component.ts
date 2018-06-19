import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CustomAlertSService } from '../custom-alert-s.service';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css']
})
export class CustomobservableComponent implements OnInit {

  data: Observable<number>
  ageArr = [];
  constructor(private _alerS:CustomAlertSService) { }

  ngOnInit() {
    this.data = new Observable(_observ => {
      setTimeout(() => {
        _observ.next(20);
        //console.log(_observ);
        _observ.unsubscribe();
      }, 1000);

      setTimeout(() => {
        
        _observ.next(40);
        
        //console.log(_observ);
      }, 2000);
    });

    this.data.subscribe(age=>{
      this.ageArr.push(age);
    });
  }
  setData(){
    this._alerS.setAlert("Value set");
  }


}
