package com.stockmarketcharting.smc.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarketcharting.smc.entity.Company;
import com.stockmarketcharting.smc.entity.IPODetail;
import com.stockmarketcharting.smc.entity.Sector;
import com.stockmarketcharting.smc.entity.StockPrice;
import com.stockmarketcharting.smc.repository.CompanyRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")  
public class CompanyController {
	@Autowired
	CompanyRepository crepo;
	
	@GetMapping(path = "/companies")
	public List<Company> getAllCompany(){
				return crepo.findAll();
	}
	
	//Find y Id
	@GetMapping(path = "/companies/{id}")
	public ResponseEntity<Optional<Company>> getCompanyDetails(@PathVariable Long id){
		Optional<Company> company = crepo.findById(id);
		return ResponseEntity.ok(company);
	}
	
	//Add A company
	@PostMapping("/companies/add")
	public Company createCompany(@Valid @RequestBody Company company) {
		return crepo.save(company);
	}
	
	@DeleteMapping("/companies/delete/{id}")
	public Map<String, Boolean> deleteCompany(@PathVariable(value = "id") Long id){
		Company company= crepo.findById(id).orElse(null);

		crepo.delete(company);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@PutMapping("/companies/update/{id}")
	public ResponseEntity<Company> updateCompany(@PathVariable(value = "id") Long id,
			@Valid @RequestBody Company company){
		Company companydt= crepo.findById(id).orElse(null);

		companydt.setCompanyName(company.getCompanyName());
		companydt.setCeo(company.getCeo());
		companydt.setBoardofDirectors(company.getBoardofDirectors());
		companydt.setTurnover(company.getTurnover());
		companydt.setCompanyBrief(company.getCompanyBrief());
		companydt.setSector(company.getSector());
		companydt.setCode(company.getCode());
		companydt.setStockExchange(company.getStockExchange());

		final Company updatedCompany= crepo.save(companydt);
		return ResponseEntity.ok(updatedCompany);
	}
	
	
	//get company IPO details
	@GetMapping(path="/company/{id}/ipo")
	public ResponseEntity<IPODetail> getCompanyIpoDetail(@PathVariable Long id){
		Optional<Company> company = crepo.findById(id);
		if(!company.isPresent())
			return null;
		IPODetail ipodt=company.get().getIpo();
		return ResponseEntity.ok(ipodt);
	}
	
	/*//get company StockPrice details
		@GetMapping(path="/company/{id}/stockprice")
		public ResponseEntity<List<StockPrice>> getCompanyStockPriceDetail(@PathVariable Long id){
			Optional<Company> company = crepo.findById(id);
			if(!company.isPresent())
				return null;
			List<StockPrice> stockPrice=company.get().getStockPrice();
			return ResponseEntity.ok(stockPrice);
		}
	*/

}







