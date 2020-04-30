import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url = 'https://www.google.com/';
  imageUrl = 'https://i.picsum.photos/id/1025/200/200.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
