import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StockPrice } from "../models/StockPrice";


@Injectable({
    providedIn: 'root'
})
export class ImportexceldataService {

    private url = 'http://localhost:8080/smc/import';

    constructor(private http: HttpClient) { }

    saveStockPrice(stockPrice: StockPrice): Observable<any>{
       var httpOptions = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN')! })
        };
        return this.http.post<StockPrice>(this.url, stockPrice);
    }
    
}