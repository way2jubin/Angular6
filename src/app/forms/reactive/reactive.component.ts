import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myemail
  myReactForm: FormGroup;
  uname = new FormControl("", [Validators.required]);
  email = new FormControl(this.myemail, [Validators.required, Validators.email]);
  pass1 = new FormControl("", [Validators.required]);
  pass2 = new FormControl("", [this.mycustomvalidate]);
  constructor() { }
  
  ngOnInit() {
    this.myReactForm = new FormGroup({
      uname: this.uname,
      email: this.email,
      pass1: this.pass1,
      pass2: this.pass2
    })
  }
  
  mycustomvalidate(aaa:AbstractControl){
    console.log(aaa.value);
    return {};
  }
  saveFormData(data){
    console.log(data)
  }

}
