import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './componet/category/category.component';
import {DashboardComponent} from './componet/dashboard/dashboard.component';
import {UserMgtComponent} from './componet/userMgt/userMgt.component';
import {ItemMgtComponent} from './componet/itemMgt/itemMgt.component';


const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/category', component: CategoryComponent },
  { path: 'admin/usermgt', component: UserMgtComponent },
  { path: 'admin/itemmgt', component: ItemMgtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
