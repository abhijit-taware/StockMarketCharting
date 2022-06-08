import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/Company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies!: Observable<Company[]>;

  constructor(private companyService: CompanyService,private router:Router) { }

  ngOnInit(){
   this.getCompanies();
  }
  getCompanies(){
    this.companies=this.companyService.getCompanies();
  }

  deleteCompany(id: number){
    this.companyService.deleteCompany(id)
    .subscribe(
      data=>{
        console.log(data);
        this.getCompanies();
      },
      error=>console.log(error));
    
  }
  companyDetails(id: number){
    this.router.navigate(['companies/details', id]);
  }
  updateCompany(id: number){
    this.router.navigate(['companies/update', id]);
  }

}
