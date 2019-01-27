import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../IOrder';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiURLv3 = "../../assets/order.json";
  private apiURLv2 = "../../assets/Info.json";
  private apiURLv1 = "../../assets/Product.json";
  private apiURLv = "../../assets/probando.json";
  constructor(private http: HttpClient) { }

 public getOrderAPI() : Observable<IOrder>{
    return this.http.get<IOrder>(this.apiURLv3);
  }
  

  public getInfoClient() : Observable<any>{
    return this.http.get<any>(this.apiURLv2);
  }


  public getInfoLineas() : Observable<any>{
    return this.http.get<any>(this.apiURLv1);
  }

  public getAlgo() : Observable<Persona>{
    return this.http.get<Persona>(this.apiURLv);
  }

  
}
