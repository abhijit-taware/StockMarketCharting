import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { UpdateSectorComponent } from './components/sectors/update-sector/update-sector.component';
import { SectorDetailsComponent } from './components/sectors/sector-details/sector-details.component';
import { LoginComponent } from './components/login/login.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/companies/create-company/create-company.component';
import { CompanyDetailsComponent } from './components/companies/company-details/company-details.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';
import { IposComponent } from './components/ipos/ipos.component';
import { IpoDetailsComponent } from './components/ipos/ipo-details/ipo-details.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { UpdateIpoComponent } from './components/ipos/update-ipo/update-ipo.component';
import { ImportexcelComponent } from './components/importexcel/importexcel.component';
import { HomeComponent } from './components/home/home.component';
import { ComparisonChartsComponent } from './components/comparison-charts/comparison-charts.component';
import { StockexchangeComponent } from './components/stockexchange/stockexchange.component';
import { CreateStockexchangeComponent } from './components/stockexchange/create-stockexchange/create-stockexchange.component';
import { UpdateStockexchangeComponent } from './components/stockexchange/update-stockexchange/update-stockexchange.component';
import { StockexchangeDetailsComponent } from './components/stockexchange/stockexchange-details/stockexchange-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SectorsComponent,
    CreateSectorComponent,
    UpdateSectorComponent,
    SectorDetailsComponent,
    LoginComponent,
    CompaniesComponent,
    CreateCompanyComponent,
    CompanyDetailsComponent,
    UpdateCompanyComponent,
    IposComponent,
    IpoDetailsComponent,
    CreateIpoComponent,
    UpdateIpoComponent,
    ImportexcelComponent,
    HomeComponent,
    ComparisonChartsComponent,
    StockexchangeComponent,
    CreateStockexchangeComponent,
    UpdateStockexchangeComponent,
    StockexchangeDetailsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
