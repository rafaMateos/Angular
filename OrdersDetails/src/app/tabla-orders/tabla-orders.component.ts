import { Component, OnInit } from '@angular/core';
import {products} from './order3'
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tabla-orders',
  templateUrl: './tabla-orders.component.html',
  styleUrls: ['./tabla-orders.component.css']
})
export class TablaOrdersComponent implements OnInit {

  public Data : Info;
  public Lista: any;
  public dataSource$ :any;
  //public columns = ['nombre', 'descripcion', 'listaCategorias', 'precioUnitario', 'precioVenta', 'impuestos','subtotal']

 
  public columns = ['id', 'nombre', 'precioVenta', 'descripcion', 'stock', 'listaCategorias']

  constructor( public servi: ApiService ) { }

  ngOnInit() {

    this.servi.getInfoPedido().subscribe(
      result => {
           
          if(result.code != 200){
              this.Data = (result);
          }else{
              this.Data = result.data;
          }

      },
      error => {
          console.log(<any>error);
      }
  );

    this.dataSource$ = this.servi.getfuncobien();
    }
    

  }

  





