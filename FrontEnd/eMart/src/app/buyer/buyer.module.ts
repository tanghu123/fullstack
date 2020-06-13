import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {CartComponent}  from './componet/cart/cart.component';
import {OrderComponent}  from './componet/order/order.component';
import {ProductsComponent}  from './componet/products/products.component';


@NgModule({
  declarations: [CartComponent, OrderComponent,ProductsComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class BuyerModule { }
