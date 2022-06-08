import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StockPrice } from 'src/app/models/StockPrice';
import { ImportexceldataService } from 'src/app/services/importexceldata.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-importexcel',
  templateUrl: './importexcel.component.html',
  styleUrls: ['./importexcel.component.css']
})
export class ImportexcelComponent implements OnInit {

  sub!: Subscription;
  errorMessage: String = "";
  errorOccured: Boolean = false;
  isSuccess: Boolean = false;
  sucessMessage: String = "";

  constructor(private router:Router,private importexceldataService:ImportexceldataService) { }

  ngOnInit(): void {
   // if(localStorage.getItem('TOKEN')==null) this.router.navigate(['unauthanticated']);
  }
  onFileChange(ev: any) {
    try {
      let workBook: any = null;
      let jsonData = null;
      const reader = new FileReader();
      const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});
        this.buildObject(jsonData)
        //this.saveStockPrice();
      }
      reader.readAsBinaryString(file);
    }
    catch(Error) {
      this.errorOccured = true;
    }
  }

  saveStockPrice(sp: StockPrice) {
    this.sub = this.importexceldataService.saveStockPrice(sp).subscribe({
      next: response => {
        this.isSuccess = true;
        this.sucessMessage = response;
        console.log(response);
      },
      error: err => {
        this.errorOccured = true;
        this.errorMessage = err
      }
    });
  }

  buildObject(jsonData: any): Array<StockPrice>
  {
    try {
        var stockPrice: Array<StockPrice> = [];
        var dataArray = jsonData.Sheet1;
        var arrlength=dataArray.length
        for(var i=0; i<dataArray.length; i++)
        {
          var sp = new StockPrice();
          sp.companyCode = Number(dataArray[i]["Company Code"]);
          sp.stockExchangeName = dataArray[i]["Stock Exchange"];
          sp.price = Number(dataArray[i]["Price Per Share(in Rs)"]);
          sp.date =this.ExcelDateToJSDate(dataArray[i]["Date"]);
          sp.time = dataArray[i]["Time"];
          stockPrice.push(sp);
          this.saveStockPrice(sp);
          //console.log(sp.date);
          
        }
        
        return stockPrice;
    }
    catch(Error)
    {
      this.errorOccured = true;
      return [];
    }
  }
  /* excelDateToJSDate(xlSerial: any){
    return new Date(-2209075200000 + (xlSerial - (xlSerial < 61 ? 0 : 1)) * 86400000);
    
  }*/
   ExcelDateToJSDate(date: number) {
    return new Date(Math.round((date - 25569)*86400*1000));
  }
 

}
