import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  @Output() navClick = new EventEmitter<string>();

  constructor(private router: Router) { }

  isSignin: boolean;
  isBuyer: boolean;
  isSellter: boolean;
  isAdmin: boolean;

  ngOnInit(): void {
    this.reset();
    if (sessionStorage.getItem('token')) {
      this.isSignin = true;
    }
    if(sessionStorage.getItem('role')){
      switch(parseInt(sessionStorage.getItem('role'))){
        case(0): this.isAdmin = true;break;
        case(1): this.isBuyer = true;break;
        case(2): this.isSellter = true;
      }
    }
  }

  reset() {
    this.isSignin = false;
    this.isBuyer = false;
    this.isSellter = false;
    this.isAdmin = false;
  }

  ngDoCheck(): void {
    // console.log('docheck');
    if (sessionStorage.getItem('token')) {
      this.isSignin = true;
    } else {
      this.isSignin = false;
    }
  }

  signOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(['sign-in']);
  }

  viewHome() {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('role')) {
      switch (sessionStorage.getItem('role')) {
        case ('2'): this.navClick.emit('seller_item'); break;
        case ('1'): this.navClick.emit('buyer_products'); break;
        case ('0'): this.navClick.emit('admin_dashboard');
      }
    }else{
      this.navClick.emit('buyer_products');
    }
    
  }

  viewOrder() {
    this.navClick.emit('buyerOrder');
  }

  viewReport() {
    this.navClick.emit('seller_report');
  }

  viewCategory() {
    this.navClick.emit('category');
  }

  viewItem() {
    this.navClick.emit('itemManagement');
  }

  viewUser() {
    this.navClick.emit('userManagement');
  }

  viewAbout() {
    this.navClick.emit('about');
  }

  signIn() {
    this.navClick.emit('sign-in');
  }

  register() {
    this.navClick.emit('register');
  }
}
