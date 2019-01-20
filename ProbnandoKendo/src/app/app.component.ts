import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoriesService } from '../app/nothwind.service';

import { State } from '@progress/kendo-data-query';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
       <kendo-grid
          [data]="view | async"
          [loading]="view.loading"
          [pageSize]="state.take"
          [skip]="state.skip"
          [sort]="state.sort"
          [sortable]="true"
          [pageable]="true"
          [scrollable]="'none'"
          (dataStateChange)="dataStateChange($event)"
        >
        <kendo-grid-column field="Apellidos" width="130"></kendo-grid-column>
        <kendo-grid-column field="nombre" width="200"></kendo-grid-column>
        <kendo-grid-column field="telefono" [sortable]="false">
        </kendo-grid-column>
      </kendo-grid>
    `
})
export class AppComponent {
    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 5
    };

    public constructor(public service: CategoriesService) {
        this.view = service;
        this.service.query(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }
}
