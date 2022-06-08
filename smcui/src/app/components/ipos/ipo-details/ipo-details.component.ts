import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipo } from 'src/app/models/Ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipo-details',
  templateUrl: './ipo-details.component.html',
  styleUrls: ['./ipo-details.component.css']
})
export class IpoDetailsComponent implements OnInit {

  id!: number;
  ipo!: Ipo;

  constructor(private route:ActivatedRoute,private router:Router,private ipoService:IpoService) { }

  ngOnInit() {
    this.ipo = new Ipo();

    this.id = this.route.snapshot.params['id'];
    
    this.ipoService.getIpo(this.id)
      .subscribe(data => {
        console.log(data)
        this.ipo = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['ipos']);
  }
}
