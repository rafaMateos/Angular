import { Component } from '@angular/core';

import { sampleProducts } from './products';

import { ApiService } from '../api.service'


@Component({
    selector: 'my-app',
    templateUrl: './kendo-ui.component.html'
        
    
})
export class KendoUI {

    public gridData: any[];

    constructor(public servi: ApiService) {
         
     }

     rellenar(){

        console.log(this.servi.getProductos());
     }

     


    }
    
