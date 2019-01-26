import { Component, OnInit } from '@angular/core';
import { products } from './LineaPedidos';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-tabla-linea-pedidos',
  templateUrl: './tabla-linea-pedidos.component.html',
  styleUrls: ['./tabla-linea-pedidos.component.css']
})
export class TablaLineaPedidosComponent implements OnInit {

  public gridData: any[] = products;
  
  

  constructor() { }

  ngOnInit() {

  }


 


  }

  


