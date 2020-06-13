import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './componet/item/item.component';
import { ReportComponent } from './componet/report/report.component';


const routes: Routes = [
  { path: 'seller/item', component: ItemComponent },
  { path: 'seller/report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
