import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent}  from './dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: "items", component: ItemsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: ItemDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
] 

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
