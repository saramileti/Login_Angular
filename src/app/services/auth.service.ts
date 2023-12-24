import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

  registerUser(regData: any): Observable<any>{
    return this.http.post(environment.baseUrl + '/register', regData, {
      responseType: 'text',});
  }
}
