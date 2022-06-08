import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
//import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Sector } from '../models/Sector';

//const BACKEND_URL = environment.apiUrl + '/sector-service/sectors/';

@Injectable({providedIn: 'root'})
export class SectorService {

  private baseurl='http://localhost:8080/smc/sectors';

  constructor(private http: HttpClient) {}

  getSectors(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.baseurl);
  }

  getSector(id: Number): Observable<any> {
    return this.http.get(this.baseurl+'/'+id);
  }

  getSectorCompanies(id: Number): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseurl + id + "/companies");
  }

  createSector(sector: Object): Observable<Object> {
    return this.http.post(this.baseurl+'/add', sector);
  }

  updateSector(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseurl+'/update/'+id, value);
  }

  deleteSector(id: number):Observable<any>{
   return this.http.delete(this.baseurl+'/delete/'+id,{responseType:'text'});
  }

}