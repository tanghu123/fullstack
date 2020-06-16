import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE'})
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }

  getCategories(){
    return this.http.get(`${environment.baseUrl}/api/admin/category`,httpOptions);
  }
  // postSignIn(user) {
  //   return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOptions);
  // }

  // postSignUp(user) {
  //   // return this.http.delete('/user/5',httpOptions);
  //   // console.log(JSON.stringify(user));
  //   return this.http.post(`${environment.baseUrl}/user`, JSON.stringify(user), httpOptions);
  // }

  // deleteUser(id){
  //   return this.http.delete('/user/'+id,httpOptions);
  // }

  // postUpdateUser(user) {
  //   return this.http.put('/user', JSON.stringify(user), httpOptions);
  // }

}
