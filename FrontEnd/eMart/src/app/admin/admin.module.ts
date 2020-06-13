import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {CategoryComponent} from './componet/category/category.component';
import {DashboardComponent} from './componet/dashboard/dashboard.component';
import {UserMgtComponent} from './componet/userMgt/userMgt.component';
import {ItemMgtComponent} from './componet/itemMgt/itemMgt.component';


@NgModule({
  declarations: [CategoryComponent, DashboardComponent,UserMgtComponent,ItemMgtComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class AdminModule { }
