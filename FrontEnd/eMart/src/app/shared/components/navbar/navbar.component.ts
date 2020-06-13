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
    if (sessionStorage.getItem('role')) {
      switch (parseInt(sessionStorage.getItem('role'))) {
        case (0): this.isAdmin = true; break;
        case (2): this.isSellter = true; break;
        default: this.isBuyer = true;
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
        case ('0'): this.router.navigate(['admin/dashboard']); break;
        case ('2'): this.router.navigate(['seller/item']); break;
        default: this.router.navigate(['buyer/products']);
      }
    } else {
      this.navClick.emit('buyer/products');
    }

  }

  viewOrder() {
    this.navClick.emit('buyer/order');
  }

  viewReport() {
    this.navClick.emit('seller/report');
  }

  viewCategory() {
    this.navClick.emit('admin/category');
  }

  viewItem() {
    this.navClick.emit('admin/itemmgt');
  }

  viewUser() {
    this.navClick.emit('admin/usermgt');
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
