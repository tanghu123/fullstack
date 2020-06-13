import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './componet/item/item.component';
import { ReportComponent } from './componet/report/report.component';


@NgModule({
  declarations: [ItemComponent, ReportComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class SellerModule { }
