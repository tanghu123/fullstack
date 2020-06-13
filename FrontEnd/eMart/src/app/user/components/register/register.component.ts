import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('role')) {
      switch (sessionStorage.getItem('role')) {
        case ('2'): this.router.navigate(['seller/item']); break;
        case ('1'): this.router.navigate(['buyer/products']); break;
        case ('0'): this.router.navigate(['admin/dashboard']);
      }
    }
  }

  seller: boolean;
  name_required: boolean;
  userName_required: boolean;
  email_required:boolean;
  show_success: boolean;
  error_message: string;
  show_fail: boolean;
  userName_errorMessage: string;
  email_requiredMessage:string;

  /* 注册操作 */
  onSubmit(value: any) {
    this.reset();
    if (this.validInput(value)) {
      this.userService.postSignUp(value).subscribe(
        success => {
          console.log("Create Account successfully!");
          this.show_success = true;
          // this.reset();
          // this.router.navigate(['/sign-in']);
        }, errorRes => {

          console.log("Status:", errorRes.status);
          console.log("Error:", errorRes.error.error);
          console.log("Detail:", errorRes.error.trace);
          let errorDetail = errorRes.error.trace;
          if (errorDetail.indexOf('username_UNIQUE')) {
            this.userName_errorMessage = "User Name is already existed!"
            this.userName_required = true;
          } else if (errorDetail.indexOf('email_UNIQUE')) {
            this.email_required = true;
            this.email_requiredMessage = "Email is already existed!";
          } else {
            this.show_fail = true;
            this.error_message = errorRes.error.error;
          }
        });
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    // console.log(value.role);
    if (!value.name) {
      this.name_required = true;
      return false;
    }
    if (!value.userName) {
      this.userName_errorMessage = "User Name is required!"
      this.userName_required = true;
      return false;
    }
    if(!value.email){
      this.email_required = true;
      this.email_requiredMessage = "Email is required!";
      return false;
    }
    if(this.seller){
      value.role = 2;
    }else{
      value.role = 1;
    }
    return true;
  }

  chooseSeller(value: any) {
    this.seller = value;
  }

  reset() {
    // this.seller = false;
    this.name_required = false;
    this.userName_required = false;
    this.show_success = false;
    this.show_fail = false;
    this.email_required = false;
  }
}
