import { Component } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'emart';
  
  headerFooter:boolean;

  //Hide Header Footer in Sign in Signup page
  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if(event.url == '/sign-in' ||  event.url == '/register'){
            this.headerFooter=true;
          }
        }
      });
    }

  handleNavClick($event: string) {
    console.log("xxxxxxxx");
    this.router.navigate([$event]);

  }
}
