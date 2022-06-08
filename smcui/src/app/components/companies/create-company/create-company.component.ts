import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company=new Company();
  submitted=false;

  constructor(private companyService:CompanyService,private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.companyService
    .createCompany(this.company).subscribe(data => {
      console.log(data)
      this.company = new Company();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/companies']);
  }
}
