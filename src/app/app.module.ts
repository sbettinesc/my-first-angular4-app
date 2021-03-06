import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemService } from './item.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [ItemService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  private router: AppRoutingModule;

  constructor() {
    console.log('App constructor');
  }
}
