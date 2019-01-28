import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../IOrder';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiURLv: string = 'https://flamerpennyapi.azurewebsites.net/pedido/';
 apiURLv2: string = 'https://flamerpennyapi.azurewebsites.net/pedido/6';
 apiURLv1 : string='https://flamerpennyapi.azurewebsites.net/pedido/6/lineaPedido/';

  constructor(private http: HttpClient) { }

  public getInfoClient() : Observable<any>{
    let headers = new HttpHeaders().set('Accept','application/json');
    return this.http.get<any>(this.apiURLv2,{headers : headers});
  }

  public getInfoPrduct() : Observable<any[]>{
    let headers = new HttpHeaders().set('Accept','application/json');
    return this.http.get<any>(this.apiURLv,{headers : headers});
  }


  public getInfoLineas() : Observable<any[]>{
    let headers = new HttpHeaders().set('Accept','application/json');
    return this.http.get<any>(this.apiURLv1,{headers : headers});
  }

  
  
}
