import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items;
  addNew: boolean;
  
  constructor() { 
    console.log("Inside contructor method");
  }

  ngOnInit() {
    console.log("Inside ngOnInit method");
    this.addNew = false;
    this.items = ITEMS;
  }

  goToAddNew() {
    console.log("Inside goToAddNew method");
    this.addNew = true;
  }

}
