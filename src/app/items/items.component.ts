import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  selectedItem: Item;
  addNew: boolean;
  
  constructor(private itemService: ItemService) {
    console.log("Inside contructor method");
    this.addNew = false;
  }

  ngOnInit() {
    console.log("Inside ngOnInit method");
    this.getItems();
  }

  goToAddNew() {
    console.log("Inside goToAddNew method");
    this.addNew = true;
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  showDetail(item: Item) {
    this.selectedItem = item;
  }
}
