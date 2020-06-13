import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeDetailComponent} from './components/home-detail/home-detail.component';
import {AboutComponent} from './../about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeDetailComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
