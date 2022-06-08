import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  id!: number;
  company!: Company;

  constructor(private route:ActivatedRoute,private router:Router,private companyService:CompanyService) { }

  ngOnInit() {
    this.company=new Company();
    this.id=this.route.snapshot.params['id'];

    this.companyService.getCompany(this.id).subscribe(data=>{
      console.log(data)
      this.company=data;
    },
    error=>console.log(error)
    );
  }
  updateCompany() {
    this.companyService.updateCompany(this.id, this.company)
      .subscribe(data => {
        console.log(data);
        this.company = new Company();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCompany();    
  }

  gotoList() {
    this.router.navigate(['/companies']);
  }
}
