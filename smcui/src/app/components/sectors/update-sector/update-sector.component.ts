import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sector } from 'src/app/models/Sector';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-update-sector',
  templateUrl: './update-sector.component.html',
  styleUrls: ['./update-sector.component.css']
})
export class UpdateSectorComponent implements OnInit {

  id!: number;
  sector!: Sector;

  constructor(private route:ActivatedRoute,private router:Router,private sectorService:SectorService) { }

  ngOnInit() {
    this.sector=new Sector();
    this.id=this.route.snapshot.params['id'];

    this.sectorService.getSector(this.id).subscribe(data=>{
      console.log(data)
      this.sector=data;
    },
    error=>console.log(error)
    );
  }
  updateSector() {
    this.sectorService.updateSector(this.id, this.sector)
      .subscribe(data => {
        console.log(data);
        this.sector = new Sector();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSector();    
  }

  gotoList() {
    this.router.navigate(['/sectors']);
  }

}
