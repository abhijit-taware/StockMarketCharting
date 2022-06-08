import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/StockExchange';



//const BACKEND_URL = environment.apiUrl + '/sector-service/sectors/';

@Injectable({providedIn: 'root'})
export class StockexchangeService {

  private baseurl='http://localhost:8080/smc/stockexchange';

  constructor(private http: HttpClient) {}

  getStockExchanges(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.baseurl);
  }

  getStockExchange(id: Number): Observable<any> {
    return this.http.get(this.baseurl+'/'+id);
  }
  createStockExchange(stockExchange: Object): Observable<Object> {
    return this.http.post(this.baseurl+'/add', stockExchange);
  }
  

  updateStockExchange(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseurl+'/update/'+id, value);
  }

  deleteStockExchange(id: number):Observable<any>{
   return this.http.delete(this.baseurl+'/delete/'+id,{responseType:'text'});
  }
}