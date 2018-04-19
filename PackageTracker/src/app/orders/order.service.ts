import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IOrder } from './order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
    private _productUrl = './api/orders/orders.json';
    constructor(private _http: HttpClient) { }
    getOrders(): Observable<IOrder[]> {
        return this._http.get<IOrder[]>(this._productUrl)
             .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOrder(id: string): Observable<IOrder> {
        return this.getOrders()
            .map((orders: IOrder[]) => orders.find(o => o.trackerId === id));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
