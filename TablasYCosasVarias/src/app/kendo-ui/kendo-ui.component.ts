import { Component } from '@angular/core';

import { sampleProducts } from './products';

import { ApiService } from '../api.service'
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';


@Component({
    selector: 'my-app',
    templateUrl: './kendo-ui.component.html'
        
    
})
export class KendoUI {

    public gridData: any[];
    public nombre: any;
    public Apellidos: any;
    public telefono: any;

    constructor(public servi: ApiService) {

     }
   
     ngOnInit() {
        this.servi.getProductos().subscribe(
            result => {
                 
                if(result.code != 200){
                    this.gridData = (result);
                }else{
                    this.gridData = result.data;
                }
 
            },
            error => {
                console.log(<any>error);
            }
        );

     }

     CargarDatosApi(){

        console.log(this.nombre);
        console.log(this.Apellidos);
        console.log(this.telefono);

     }
        
      }


     


        /*
     rellenar(){

        this.servi.getProductos().subscribe(
            result => {
                 
                if(result.code != 200){
                    this.gridData = (result);
                }else{
                    this.gridData = result.data;
                }
 
            },
            error => {
                console.log(<any>error);
            }
        );

     }
     */
    


    
    
