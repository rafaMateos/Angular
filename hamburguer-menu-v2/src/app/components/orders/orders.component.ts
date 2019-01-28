import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';

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

    alert('Delete/////https://flamerpennyapi.azurewebsites.net/pedido/'+id);
  }

  Editar(id){

    alert('Pasar a la otra pantalla este id para mostrarlo(OrderDetails) : '+id);
  }

}
