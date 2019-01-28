import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { MatTableModule } from '@angular/material/table';
import { observable, Observable } from 'rxjs';
import { IOrder } from 'src/app/IOrder';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  json : any[];
  miOrder : any;
  Data : any;
  miLineasDePedido : Observable<any[]>;
  flechaa: Persona;
  //public columns = ['name', 'description', 'category', 'units', 'unitPrice', 'taxes','subTotal']
  public columns = ['nombre', 'descripcion', 'listaCategorias', 'stock','precioUnitario','impuestos','subtotal','Acciones']
  public columns2 = ['nombre']

  constructor(public miOrderService: OrderService,private httpClient:HttpClient) { }

  ngOnInit() {
    

   
      
      this.miLineasDePedido = this.miOrderService.getInfoLineas();
      
      this.miOrderService.getInfoClient().subscribe(result => { 
        this.Data = result;
       
      });

    

     
  }

  Editar(id){

    alert(id);
  }

  Borrar(id){

    alert(id);
  }
  
  public addProducto(): void{
  
    let params = "json="+this.json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
     this.httpClient.post('https://apirestpersonasrafael.azurewebsites.net/api/personas',this.json,{headers : headers}).subscribe(result => {console.log('Todo flama')},error =>{console.log(error)})

}


}
