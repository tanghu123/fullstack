import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent}  from './componet/cart/cart.component';
import {OrderComponent}  from './componet/order/order.component';
import {ProductsComponent}  from './componet/products/products.component';



const routes: Routes = [
  { path: 'buyer/products', component:  ProductsComponent},
  { path: 'buyer/order', component: OrderComponent },
  { path: 'buyer/cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
