import { Component, OnInit } from '@angular/core';
import { DatamanageService } from '../datamanage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _d:DatamanageService) { }

  ngOnInit() {
  }

}
