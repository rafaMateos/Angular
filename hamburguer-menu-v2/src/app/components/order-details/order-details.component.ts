import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service'
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { MatTableModule } from '@angular/material/table';
import { observable, Observable } from 'rxjs';
import { IOrder } from 'src/app/IOrder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LineaPedido } from 'src/app/models/LineaPedido';


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

  json : string;
  LineaPedido: LineaPedido = new LineaPedido();
  LineaPedidoActu: LineaPedido = new LineaPedido();
  miOrder : any[];
  Stock:string
  id : string
  max:string;
  select : any;
  Data : any;
  p : Product;
  miLineasDePedido : Observable<any[]>;
  flecha: any;
  productid: number
  //public columns = ['name', 'description', 'category', 'units', 'unitPrice', 'taxes','subTotal']
  public columns = ['nombre', 'descripcion', 'listaCategorias', 'cantidad','precioUnitario','impuestos','subtotal','Acciones']


 

  constructor(public miOrderService: OrderService,private httpClient:HttpClient,private route: ActivatedRoute,) { }

  ngOnInit() {
    
    this.miOrderService.getInfoPrductGeneral().subscribe(result =>{

      this.miOrder = result;

     })


     this.id = this.route.snapshot.paramMap.get('id');
      
      this.miLineasDePedido = this.miOrderService.getInfoLineas(this.id);
   
      this.miOrderService.getInfoClient(this.id).subscribe(result => {
        this.Data = result;
      });


  }

  Open(){


    document.getElementById('NewProduct').removeAttribute('hidden');

  }

  hola(id){

    
     this.miOrderService.getInfoPrductID(id).subscribe(r =>{

      this.json =JSON.stringify(r);

      this.p = JSON.parse(this.json);
  
      this.max = this.p.stock.toString();

      document.getElementById('descrip').setAttribute('value',this.p.descripcion.toString());
      document.getElementById('descrip').setAttribute('readonly','readonly');

      document.getElementById('categories').setAttribute('value',this.p.listaCategorias[0].nombre);
      document.getElementById('categories').setAttribute('readonly','readonly');

      document.getElementById('cantidad').setAttribute('max',this.max);

      document.getElementById('precio').setAttribute('value',this.p.precioVenta);

      document.getElementById('impuestos').setAttribute('value','0.21');
      document.getElementById('impuestos').setAttribute('readonly','readonly');

      document.getElementById('total').setAttribute('value','0');

      document.getElementById('stockdispo').innerText = this.p.stock.toString();

     })

  
  }


  Borrar(id){

   this.miOrderService.deleteLine(id,this.id);
  }


  save(){

    let preciounit : number = parseInt((<HTMLInputElement>document.getElementById("precio")).value);
    let cantidad : number = parseInt((<HTMLInputElement>document.getElementById("cantidad")).value);
    let total : number = parseInt((<HTMLInputElement>document.getElementById("total")).value);


    this.LineaPedido.idPedido = parseInt(this.id)
    this.LineaPedido.idProducto = parseInt(this.p.id);  
    this.LineaPedido.precioUnitario = preciounit;

    this.LineaPedido.cantidad = cantidad;
    this.LineaPedido.impuestos = 0.21;
    this.LineaPedido.subtotal =  total;


    console.log(this.LineaPedido)

    if(this.LineaPedido.cantidad > this.p.stock){

      alert('No stock suficiente')
    }else{

      document.getElementById('NewProduct').setAttribute('hidden','hidden');

      console.log(JSON.stringify(this.LineaPedido))
  
      this.addProducto(this.LineaPedido)

    }

  }
  
  public addProducto(LineaPedido): void{
  
    var send = JSON.stringify(LineaPedido);
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
     this.httpClient.post('https://flamerpennyapi.azurewebsites.net/pedido/'+this.LineaPedido.idPedido +'/lineapedido',send,{headers : headers})
     .subscribe(
       result => 

       {console.log('Todo flama')},

       error =>{console.log(error)})

}

public Editar(id){
 
  document.getElementById('EditarPro').removeAttribute('hidden');

  this.miOrderService.getLinea(this.id,id).subscribe(result =>{

    this.json =JSON.stringify(result);

    this.LineaPedidoActu = JSON.parse(this.json);

    
    document.getElementById('cantidadE').setAttribute('value',this.LineaPedidoActu.cantidad.toString());

    document.getElementById('precioE').setAttribute('value',this.LineaPedidoActu.precioUnitario.toString());

    document.getElementById('totalE').setAttribute('value',this.LineaPedidoActu.subtotal.toString());

  })

  this.miOrderService.getInfoPrductID(id).subscribe(r =>{

    this.productid = id;

    this.json =JSON.stringify(r);

    this.p = JSON.parse(this.json);

    document.getElementById('stockdispoE').innerText = this.p.stock.toString();

  })

}

public Actualizar(){

  document.getElementById('EditarPro').setAttribute('hidden','hidden');
  

  let preciounit : number = parseInt((<HTMLInputElement>document.getElementById("precioE")).value);
  let cantidad : number = parseInt((<HTMLInputElement>document.getElementById("cantidadE")).value);
  let total : number = parseInt((<HTMLInputElement>document.getElementById("totalE")).value);

    this.LineaPedido.idPedido = parseInt(this.id)
    this.LineaPedido.idProducto = this.productid;
    this.LineaPedido.precioUnitario = preciounit;

    this.LineaPedido.cantidad = cantidad;
    this.LineaPedido.impuestos = 0.21;
    this.LineaPedido.subtotal =  total;

    if(this.LineaPedido.cantidad > this.p.stock){

      alert('Stock insuficiente');
    }else{

      //this.ActualizarLinea(this.LineaPedido);Preguntar a oscar por delete y put de la linea
      alert('Po va bien')
}

    }
 
public ActualizarLinea(LineaPedido): void{
  
  var send = JSON.stringify(LineaPedido);
  let headers = new HttpHeaders().set('Content-Type','application/json');
   
   this.httpClient.put('https://flamerpennyapi.azurewebsites.net/pedido/'+this.LineaPedido.idPedido +'/lineapedido/' + LineaPedido.idProducto,send,{headers : headers})
   .subscribe(
     result => 

     {console.log('Todo flama')},

     error =>{console.log(error)})

}

}
