import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/Sector';
import { Router } from '@angular/router';
import { SectorService } from '../../../services/sector.service';



@Component({
  selector: 'app-create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.css']
})
export class CreateSectorComponent implements OnInit {

   sector: Sector=new Sector();
   submitted=false;

  constructor(private sectorService:SectorService,private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.sectorService
    .createSector(this.sector).subscribe(data => {
      console.log(data)
      this.sector = new Sector();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/sectors']);
  }

}
