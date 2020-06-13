import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserModule} from './user/user.module';
import {ProductModule} from './product/product.module';
import {HomeModule} from './home/home.module';
import { AboutComponent } from './about/about.component';
import {SellerModule}  from './seller/seller.module';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      SharedModule,
      UserModule,
      ProductModule,
      HomeModule,
      SellerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
