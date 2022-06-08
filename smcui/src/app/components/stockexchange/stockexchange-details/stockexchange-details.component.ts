import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-stockexchange-details',
  templateUrl: './stockexchange-details.component.html',
  styleUrls: ['./stockexchange-details.component.css']
})
export class StockexchangeDetailsComponent implements OnInit {

  id!: number;
  stockExchange!: StockExchange;

  constructor(private route:ActivatedRoute,private router:Router,private stockexchangeService:StockexchangeService) { }

  ngOnInit() {
    this.stockExchange=new StockExchange();

    this.id = this.route.snapshot.params['id'];
    
    this.stockexchangeService.getStockExchange(this.id)
      .subscribe(data => {
        console.log(data)
        this.stockExchange = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['stockexchange']);
  }

}
