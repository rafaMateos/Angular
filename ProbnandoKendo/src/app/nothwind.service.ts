import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

export abstract class NorthwindService extends BehaviorSubject<GridDataResult> {
    public loading: boolean;

    private BASE_URL = 'https://apirestpersonasrafael.azurewebsites.net/api/personas';

    constructor(
        public http: HttpClient,
        protected tableName: string
    ) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }

    protected fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr = `${toODataString(state)}&$count=true`;
        this.loading = true;

        return this.http
            .get(`${this.BASE_URL}`)
            .pipe(
                map(response => (<GridDataResult>{
                    data: response['value'],
                    total: parseInt(response['@odata.count'], 10)
                })),
                tap(() => this.loading = false)
            );
    }
}


@Injectable()
export class CategoriesService extends NorthwindService {
    constructor(http: HttpClient) { super(http, 'Personas'); }

    queryAll(st?: any): Observable<GridDataResult> {
        const state = Object.assign({}, st);
        delete state.skip;
        delete state.take;

        return this.fetch(this.tableName, state);
    }
}
