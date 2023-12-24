import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  // login(loginParams: any) { 
  //   return this.http.post("http://localhost:8080/authenticate", loginParams);
  // }

  // registerUser(userDetails: User ){
  //   return this.http.post(`${this.baseUrl}/users`, userDetails);
  // }

  // getUserByUsername(username:string): Observable<User []>{
  //   return this.http.get<User []>(`${this.baseUrl}/users?username=${username}`);
  // }
}
