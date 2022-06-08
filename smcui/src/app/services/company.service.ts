import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';


//const BACKEND_URL = environment.apiUrl + '/sector-service/sectors/';

@Injectable({providedIn: 'root'})
export class CompanyService {

  private baseurl='http://localhost:8080/smc/companies';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseurl);
  }

  getCompany(id: Number): Observable<any> {
    return this.http.get(this.baseurl+'/'+id);
  }
  createCompany(company: Object): Observable<Object> {
    return this.http.post(this.baseurl+'/add', company);
  }

  /*getSectorCompanies(id: Number): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseurl + id + "/companies");
  }*/

  

  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseurl+'/update/'+id, value);
  }

  deleteCompany(id: number):Observable<any>{
   return this.http.delete(this.baseurl+'/delete/'+id,{responseType:'text'});
  }

}