import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sector-details',
  templateUrl: './sector-details.component.html',
  styleUrls: ['./sector-details.component.css']
})
export class SectorDetailsComponent implements OnInit {
  
  id!: number;
  sector!: Sector;

  constructor(private route:ActivatedRoute,private router:Router,private sectorService:SectorService) { }

  ngOnInit() {
    this.sector = new Sector();

    this.id = this.route.snapshot.params['id'];
    
    this.sectorService.getSector(this.id)
      .subscribe(data => {
        console.log(data)
        this.sector = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['sectors']);
  }

}
