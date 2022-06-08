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
import com.stockmarketcharting.smc.entity.StockExchange;

import com.stockmarketcharting.smc.repository.StockExchangeRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200") 
public class StockExchangeController {
	@Autowired
	StockExchangeRepository serepo;
	
	@GetMapping(path = "/stockexchange/{id}")
	public ResponseEntity<Optional<StockExchange>> getStockExchangeDetails(@PathVariable Long id){
		Optional<StockExchange> stockExchange = serepo.findById(id);
		return ResponseEntity.ok(stockExchange);
	}
	
	@GetMapping(path = "/stockexchange")
	public List<StockExchange> getAllStockExchange(){
				return serepo.findAll();
	}
	
	@PostMapping("/stockexchange/add")
	public StockExchange createStockExchange(@Valid @RequestBody StockExchange stockExchange) {
		return serepo.save(stockExchange);
	}
	
	@DeleteMapping("/stockexchange/delete/{id}")
	public Map<String, Boolean> deleteStockExchange(@PathVariable(value = "id") Long id){
		StockExchange stockexchange= serepo.findById(id).orElse(null);

		serepo.delete(stockexchange);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	//get company StockPrice details
			@GetMapping(path="/stockexchange/{id}/companies")
			public ResponseEntity<List<Company>> getCompanyByStockExchange(@PathVariable Long id){
				Optional<StockExchange> stockexchange = serepo.findById(id);
				if(!stockexchange.isPresent())
					return null;
				List<Company> company=stockexchange.get().getCompany();
				return ResponseEntity.ok(company);
			}
			
			@PutMapping("/stockexchange/update/{id}")
			public ResponseEntity<StockExchange> updateStockExchange(@PathVariable(value = "id") Long id,
					@Valid @RequestBody StockExchange stockExchange){
				StockExchange stockexchange= serepo.findById(id).orElse(null);

				stockexchange.setName(stockExchange.getName());
				stockexchange.setAddress(stockExchange.getAddress());
				stockexchange.setRemarks(stockExchange.getRemarks());
				
				final StockExchange updatedStockExchange= serepo.save(stockexchange);
				return ResponseEntity.ok(updatedStockExchange);
			}
	
}







