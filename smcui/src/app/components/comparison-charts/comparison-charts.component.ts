import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart, LinearScale ,CategoryScale, LineElement,registerables} from 'chart.js';
import { StockPriceService } from 'src/app/services/StockPriceService';

import { Comparison } from '../../models/Comparison';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
Chart.register(CategoryScale,LinearScale,LineElement,...registerables);


@Component({
  selector: 'app-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  styleUrls: ['./comparison-charts.component.css']
})
export class ComparisonChartsComponent implements OnInit {

  chart: any = [];
  //show: boolean = false;

  comparison: Comparison = {
    name: '',
    stockExchangeName: '',
    fromPeriod: new Date,
    toPeriod: new Date,
    periodicity: ''
  }

  constructor(private stockPriceService: StockPriceService, private elementRef: ElementRef,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: Comparison) {
    //if(!valid) {

    //}
    //else {
      console.log(value);
      this.stockPriceService.getCompanyStockPrices(value)
        .subscribe(response => {
          console.log(response);
          let prices = response.map(res => res.price);
          let dates = response.map(res => res.date);
          console.log(prices);
          console.log(dates);
          //this.show = true;
          let htmlRef = this.elementRef.nativeElement.querySelector("#canvasId");
          console.log(htmlRef);
          
          this.chart = new Chart(htmlRef, {
            type: 'line',
            data: {
              labels: dates,
              datasets: [
                {
                  label: 'Price',
                  data: prices,
                  borderColor: "#3cba9f",
                  fill: false
                },
              ]
            },
            /*options: {
              //legend: {
                //display: false
              //},
              scales: {
                x: {
                  display: true
                },
                y: {
                  display: true
                },
              }
            }*/
            options:{
              scales:{
                x:{
                  title:{
                    display:true,
                    text:'Date'
                  }
                },
                y:{
                  title:{
                    display:true,
                    text:' Price'
                  }
                }
          }}
          
          });
          console.log(this.chart);
        });
    }
  }

