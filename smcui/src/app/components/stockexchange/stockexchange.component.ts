import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockexchangeService } from '../../services/stockexchange.service';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  stockExchanges!: Observable<StockExchange[]>;

  constructor(private stockexchangeService: StockexchangeService,private router:Router) { }

  ngOnInit(){
   this.getCompanies();
  }
  getCompanies(){
    this.stockExchanges=this.stockexchangeService.getStockExchanges();
  }

  deleteStockExchange(id: number){
    this.stockexchangeService.deleteStockExchange(id)
    .subscribe(
      data=>{
        console.log(data);
        this.getCompanies();
      },
      error=>console.log(error));
    
  }
  
  stockExchangeDetails(id: number){
    this.router.navigate(['stockexchange/details', id]);
  }
  updateStockExchange(id: number){
    this.router.navigate(['stockexchange/update', id]);
  }

}
