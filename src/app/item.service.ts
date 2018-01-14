import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';

// import async libraries
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    this.messageService.add("Fetching items...");
    return of(ITEMS);
  }

}
