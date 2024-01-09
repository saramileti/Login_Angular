import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}


  loginUser(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + '/authenticate', data);
  }

  registerUser(data: any): Observable<any>{
    return this.http.post(environment.baseUrl + '/register', data, {
      responseType: 'text',});
  }

  logOutUser (){
   const token = localStorage.getItem('jwtToken')
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + token!);
    this.http.get(environment.baseUrl + '/logout', {headers}).subscribe(() =>{
      localStorage.removeItem("token");
   
    })
    console.log(headers);
    
    };


  }

