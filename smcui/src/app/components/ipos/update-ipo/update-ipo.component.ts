import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipo } from 'src/app/models/Ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  id!: number;
  ipo!: Ipo;

  constructor(private route:ActivatedRoute,private router:Router,private ipoService:IpoService) { }

  ngOnInit() {
    this.ipo=new Ipo();
    this.id=this.route.snapshot.params['id'];

    this.ipoService.getIpo(this.id).subscribe(data=>{
      console.log(data)
      this.ipo=data;
    },
    error=>console.log(error)
    );
  }
  updateIpo() {
    this.ipoService.updateIpo(this.id, this.ipo)
      .subscribe(data => {
        console.log(data);
        this.ipo = new Ipo();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateIpo();    
  }

  gotoList() {
    this.router.navigate(['/ipos']);
  }

}
