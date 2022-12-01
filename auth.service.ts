import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
 constructor(private http: HttpClient){

 }
 url = "https://localhost:44398/api/User/CreateUser"
 
 registerUser(user:Array<String>): Observable<any> {
  return this.http.post(this.url, {
    FirstName : user[0],
    LastName : user[1],
    Email : user[2],
    Mobile : user[3],
    Gender : user[4],
    Password: user[5]

  },{responseType:'text'});
}
 

}


 