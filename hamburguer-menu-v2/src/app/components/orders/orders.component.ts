import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public columns = ['fechaPedido','fechaEntrega','nombreCliente','nombreVendedor','totalPedido','Acciones'];
  public ProgresBar : any;
  Loading : boolean;
 

  Pedidos : Observable<any[]>;

  constructor(public miOrderService: OrderService) { }

  ngOnInit() {
    this.Pedidos = this.miOrderService.getInfoPrduct();
   
    this.Pedidos.subscribe(
      result =>{
        if(this.Pedidos)
       this.ProgresBar = document.getElementById('DivProgres').setAttribute('hidden','hidden');}
      )

  }

   
  Borrar(id){
    this.miOrderService.deleteOrder(id).subscribe(result=>{
      console.log(result)
      this.reloadPage();
    })
  }

  reloadPage(){

    window.location.reload();
  
  }
}
