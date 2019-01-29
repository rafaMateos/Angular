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

  Pedidos : Observable<any[]>;

  constructor(public miOrderService: OrderService) { }

  ngOnInit() {

    this.Pedidos = this.miOrderService.getInfoPrduct();
  }

  Borrar(id){
    
    this.miOrderService.deleteOrder(id);
  }
}
