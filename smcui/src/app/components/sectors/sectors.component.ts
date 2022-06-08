import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Sector } from '../../models/Sector';
import { SectorService } from '../../services/sector.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  sectors!: Observable<Sector[]>;

  constructor(private sectorService: SectorService,private router:Router) { }

  ngOnInit(){
   this.getSectors();
  }
  getSectors(){
    this.sectors=this.sectorService.getSectors();
  }

  deleteSector(id: number){
    this.sectorService.deleteSector(id)
    .subscribe(
      data=>{
        console.log(data);
        this.getSectors();
      },
      error=>console.log(error));
    
  }
  updateSector(id: number){
    this.router.navigate(['sectors/update', id]);
  }

  sectorDetails(id: number){
    this.router.navigate(['sectors/details', id]);
  }

  
}