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
 

  Pedidos : Observable<any[]>;

  constructor(public miOrderService: OrderService) { }

  ngOnInit() {

    this.ProgresBar = document.getElementById('algo');

    this.Pedidos = this.miOrderService.getInfoPrduct();
    if(typeof this.Pedidos === 'undefined'){

      this.ProgresBar.setAttribute('hidden','hidden');

    }else{

      this.ProgresBar.removeAttribute('hidden');
    }
  
  }

  Borrar(id){
    
    this.miOrderService.deleteOrder(id).subscribe(result=>{
      console.log(result)
      this.Pedidos = this.miOrderService.getInfoPrduct();
    })
  }
}
