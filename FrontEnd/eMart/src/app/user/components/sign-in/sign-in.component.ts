import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  name_required: boolean;
  password_required: boolean;
  login_fail: boolean;
  login_fail_message: string;

  ngOnInit(): void {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('role')) {
      switch (sessionStorage.getItem('role')) {
        case ('2'): this.router.navigate(['seller/item']); break;
        case ('1'): this.router.navigate(['buyer/products']); break;
        case ('0'): this.router.navigate(['admin/dashboard']);
      }
    }
  }

  /* 登录操作 */
  onSubmit(value: any) {
    this.reset();
    if (this.validInput(value)) {
      this.userService.postSignIn(value).subscribe(
        data => {
          const info: any = data;
          console.log("result", info);
          if (info.result == 1) {
            console.log('登录成功，调转详情页');
            sessionStorage.setItem('token', info.token);
            sessionStorage.setItem('role', info.role);
            switch (info.role) {
              case ('2'): this.router.navigate(['seller/item']); break;
              case ('1'): this.router.navigate(['buyer/products']); break;
              case ('0'): this.router.navigate(['admin/dashboard']);
            }
          } else {
            this.login_fail = true;
            this.login_fail_message = info.message;
          }
          // console.log(JSON.stringify(data));
          // const info: any = data;
          // console.log(info);
          // if (200 === info.status) {
          //     console.log('登录成功，调转详情页');
          //     sessionStorage.setItem('token', info.result.token)
          //     this.router.navigate(['/products']);
          // } else {
          //   console.log('登录失败，弹出MSG');
          //   // this.alerts.push({type : 'danger', message: 'username or password error!'});

          // }
        },
        errorRes => {
          console.log("Post Error:", errorRes);
        }
      );
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    if (!value.name) {
      // this.alerts.push({type : 'danger', message: 'username required!'});
      this.name_required = true;
      return false;
    } else {
      this.name_required = false;
    }

    if (!value.password) {
      this.password_required = true;
      return false;
    } else {
      this.password_required = false;
    }
    return true;
  }
  reset() {
    this.name_required = false;
    this.password_required = false;
    this.login_fail = false;
  }

}