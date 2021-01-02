import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBrews().subscribe(data => {
      this.brews = data;
    });
  }

}
