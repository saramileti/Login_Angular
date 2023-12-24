import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{ 
    return this.http.get(this.url + '/hello');
  }
}
