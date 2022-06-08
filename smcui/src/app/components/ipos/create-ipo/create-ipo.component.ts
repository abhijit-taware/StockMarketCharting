import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/models/Ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {
  ipo: Ipo=new Ipo();
  submitted=false;

  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.ipoService
    .createIpo(this.ipo).subscribe(data => {
      console.log(data)
      this.ipo = new Ipo();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/ipos']);
  }

}
