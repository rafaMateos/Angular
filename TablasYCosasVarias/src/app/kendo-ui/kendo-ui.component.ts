import { Component } from '@angular/core';

import { sampleProducts } from './products';


@Component({
    selector: 'my-app',
    templateUrl: './kendo-ui.component.html'
        
    
})
export class KendoUI {
    public gridData: any[] = sampleProducts;

    constructor() { }

    
}