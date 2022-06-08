import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Ipo } from '../models/Ipo';


//const BACKEND_URL = environment.apiUrl + '/sector-service/sectors/';

@Injectable({providedIn: 'root'})
export class IpoService {

  private baseurl='http://localhost:8080/smc/ipos';

  constructor(private http: HttpClient) {}

  getIpos(): Observable<Ipo[]> {
    return this.http.get<Ipo[]>(this.baseurl);
  }

  getIpo(id: Number): Observable<any> {
    return this.http.get(this.baseurl+'/'+id);
  }
  createIpo(ipo: Object): Observable<Object> {
    return this.http.post(this.baseurl+'/add', ipo);
  }

  /*getSectorIpos(id: Number): Observable<Ipo[]> {
    return this.http.get<Ipo[]>(this.baseurl + id + "/ipos");
  }*/

  

  updateIpo(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseurl+'/update/'+id, value);
  }

  deleteIpo(id: number):Observable<any>{
   return this.http.delete(this.baseurl+'/delete/'+id,{responseType:'text'});
  }

}