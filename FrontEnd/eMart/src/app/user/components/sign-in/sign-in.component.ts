import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.reset();
  }

  name_required:boolean;
  password_required:boolean;

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/products']);
    }
  }

  /* 登录操作 */
  onSubmit(value: any) {
    if (this.validInput(value)) {
      this.userService.postSignIn(value).subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.code) {
              console.log('登录成功，调转详情页');
              sessionStorage.setItem('token', info.result.token)
              this.router.navigate(['/products']);
          } else {
            console.log('登录失败，弹出MSG');
            // this.alerts.push({type : 'danger', message: 'username or password error!'});

          }
        }
      );
    }
  }
  /* 验证输入项 */
  validInput(value: any): boolean {
    this.reset();
    if (!value.name) {
      // this.alerts.push({type : 'danger', message: 'username required!'});
      this.name_required = true;
      return false;
    }else{
      this.name_required = false;
    }

    if (!value.password) {
      this.password_required = true;
      return false;
    }else{
      this.password_required = false;
    }
    return true;
  }

  close() { 
    console.log(this.name_required, this.password_required);
    this.reset();
  }

  reset() {
    this.name_required = false;
    this.password_required = false;
  }

}