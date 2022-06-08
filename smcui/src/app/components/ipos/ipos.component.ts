import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ipo } from 'src/app/models/Ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IposComponent implements OnInit {

  ipos!: Observable<Ipo[]>;

  constructor(private ipoService: IpoService,private router:Router) { }

  ngOnInit(){
   this.getIpos();
  }
  getIpos(){
    this.ipos=this.ipoService.getIpos();
  }

  deleteIpo(id: number){
    this.ipoService.deleteIpo(id)
    .subscribe(
      data=>{
        console.log(data);
        this.getIpos();
      },
      error=>console.log(error));
    
  }
  
  ipoDetails(id: number){
    this.router.navigate(['ipos/details', id]);
  }
  
  updateIpo(id: number){
    this.router.navigate(['ipos/update', id]);
  }
}
