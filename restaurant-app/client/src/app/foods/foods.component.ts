import { Item } from './../services/interfaces/item';
import { Component, OnInit } from '@angular/core';
import { ListFoodService } from '../services/list-food/list-food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.sass'],
})
export class FoodsComponent implements OnInit {
  items: Item[];
  constructor(private listFoodService: ListFoodService) {}

  ngOnInit(): void {
    this.listFoodService.getFoods().subscribe((data) => (this.items = data));
  }
}
