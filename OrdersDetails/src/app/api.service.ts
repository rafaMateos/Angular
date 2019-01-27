import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '../assets/order4.json'
  url1 = '../assets/cliente.json';
  url2 = '../assets/orderDetails.json';

  
  constructor(private http: HttpClient) { }


  getfuncobien(): Observable<any>{
    return this.http.get(this.url);
  }

  getInfoPedido(): Observable<any>{

    return this.http.get(this.url1);
  }

  getInfoLineas(): Observable<Product[]>{

    return this.http.get<Product[]>(this.url2);
  }


}
