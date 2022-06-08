import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchange } from 'src/app/models/StockExchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-update-stockexchange',
  templateUrl: './update-stockexchange.component.html',
  styleUrls: ['./update-stockexchange.component.css']
})
export class UpdateStockexchangeComponent implements OnInit {

  id!: number;
  stockExchange!: StockExchange;

  constructor(private route:ActivatedRoute,private router:Router,private stockexchangeService:StockexchangeService) { }

  ngOnInit() {
    this.stockExchange=new StockExchange();
    this.id=this.route.snapshot.params['id'];

    this.stockexchangeService.getStockExchange(this.id).subscribe(data=>{
      console.log(data)
      this.stockExchange=data;
    },
    error=>console.log(error)
    );
  }
  updateStockexchange() {
    this.stockexchangeService.updateStockExchange(this.id, this.stockExchange)
      .subscribe(data => {
        console.log(data);
        this.stockExchange = new StockExchange();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStockexchange();    
  }

  gotoList() {
    this.router.navigate(['/stockexchange']);
  }

}
