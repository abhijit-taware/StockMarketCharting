import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { SectorDetailsComponent } from './components/sectors/sector-details/sector-details.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { UpdateSectorComponent } from './components/sectors/update-sector/update-sector.component';

import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/companies/create-company/create-company.component';
import { CompanyDetailsComponent } from './components/companies/company-details/company-details.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';

import { IposComponent } from './components/ipos/ipos.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { UpdateIpoComponent } from './components/ipos/update-ipo/update-ipo.component';
import { IpoDetailsComponent } from './components/ipos/ipo-details/ipo-details.component';
import { ImportexcelComponent } from './components/importexcel/importexcel.component';
import { HomeComponent } from './components/home/home.component';
import { ComparisonChartsComponent } from './components/comparison-charts/comparison-charts.component';
import { StockexchangeComponent } from './components/stockexchange/stockexchange.component';
import { StockexchangeDetailsComponent } from './components/stockexchange/stockexchange-details/stockexchange-details.component';
import { UpdateStockexchangeComponent } from './components/stockexchange/update-stockexchange/update-stockexchange.component';
import { CreateStockexchangeComponent } from './components/stockexchange/create-stockexchange/create-stockexchange.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sectors', component: SectorsComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/add', component: CreateCompanyComponent},
  {path: 'companies/update/:id', component: UpdateCompanyComponent},
  {path: 'companies/details/:id', component: CompanyDetailsComponent},
  {path: 'sectors/add', component: CreateSectorComponent},
  {path: 'sectors/update/:id', component: UpdateSectorComponent},
  {path: 'sectors/details/:id', component: SectorDetailsComponent},
  {path: 'ipos', component: IposComponent},
  {path: 'ipos/add', component: CreateIpoComponent},
  {path: 'ipos/update/:id', component: UpdateIpoComponent},
  {path: 'ipos/details/:id', component: IpoDetailsComponent},
  {path: 'import', component: ImportexcelComponent},
  {path: 'comparecompany', component: ComparisonChartsComponent},
  {path: 'stockexchange', component: StockexchangeComponent},
  {path: 'stockexchange/details/:id', component: StockexchangeDetailsComponent},
  {path: 'stockexchange/update/:id', component: UpdateStockexchangeComponent},
  {path: 'stockexchange/add', component: CreateStockexchangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
