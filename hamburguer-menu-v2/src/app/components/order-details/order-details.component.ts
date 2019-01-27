import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { MatTableModule } from '@angular/material/table';
import { observable, Observable } from 'rxjs';
import { IOrder } from 'src/app/IOrder';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  json : any;
  miOrder : any;
  Data : any;
  miLineasDePedido : Observable<any[]>;
  flechaa: Persona;
  //public columns = ['name', 'description', 'category', 'units', 'unitPrice', 'taxes','subTotal']
  public columns = ['nombre', 'descripcion', 'listaCategorias', 'stock','precioUnitario','impuestos','subtotal']

  constructor(public miOrderService: OrderService,private httpClient:HttpClient) { }

  ngOnInit() {
     this.miOrderService.getOrderAPI().subscribe(result => { 
        this.miOrder = result;
        this.miLineasDePedido = this.miOrder.productList;
      });

      this.miOrderService.getInfoClient().subscribe(result => { 
        this.Data = result;
       
      });

      this.miOrderService.getInfoLineas().subscribe(result => { 
        this.miLineasDePedido =result;
      });

      this.miOrderService.getAlgo().subscribe(result => { 
        this.flechaa = result;
      });


     
    
  }

  
  public addProducto(): void{
    this.json = JSON.stringify(this.flechaa);
    let params = "json="+this.json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
     this.httpClient.post('https://apirestpersonasrafael.azurewebsites.net/api/personas',this.json,{headers : headers}).subscribe(result => {console.log('Todo flama')},error =>{console.log(error)})
    
}


}
