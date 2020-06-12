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
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/products']);
    }
  }

  seller: boolean;
  name_required: boolean;
  userName_required: boolean;

  /* 登录操作 */
  onSubmit(value: any) {
    this.reset();
    if (this.validInput(value)) {
      this.userService.postSignUp(value).subscribe(
        success => {
          console.log("Create Account successfully!");
        }, errorRes => { 
          console.log("Status:", errorRes.status); 
          console.log("Error:", errorRes.error.error); 
          console.log("Detail:", errorRes.error.trace); 
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
      this.userName_required = true;
      return false;
    }
    return true;
  }

  chooseSeller(value: any) {
    this.seller = value;
  }

  reset() {
    this.seller = false;
    this.name_required = false;
    this.userName_required = false;
  }
}
