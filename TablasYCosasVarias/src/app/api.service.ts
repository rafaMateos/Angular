import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url : string = 'https://apirestpersonasrafael.azurewebsites.net/api/personas';
 
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.url);
}

}
