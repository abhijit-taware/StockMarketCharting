import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-create-stockexchange',
  templateUrl: './create-stockexchange.component.html',
  styleUrls: ['./create-stockexchange.component.css']
})
export class CreateStockexchangeComponent implements OnInit {

  stockExchange: StockExchange=new StockExchange();
  submitted=false;

  constructor(private stockexchangeService:StockexchangeService,private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.stockexchangeService
    .createStockExchange(this.stockExchange).subscribe(data => {
      console.log(data)
      this.stockExchange = new StockExchange();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/stockexchange']);
  }

}
