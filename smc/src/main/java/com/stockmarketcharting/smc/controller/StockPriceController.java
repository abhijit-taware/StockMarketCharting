package com.stockmarketcharting.smc.controller;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.stockmarketcharting.smc.dto.CompanyCompareRequest;
import com.stockmarketcharting.smc.entity.StockPrice;
import com.stockmarketcharting.smc.repository.StockPriceRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")  
public class StockPriceController {
	@Autowired
	StockPriceRepository stockpricerepo;
	
	@GetMapping(path = "/stockprice/{id}")
	public ResponseEntity<Optional<StockPrice>> getStockPriceById(@PathVariable Long id){
		Optional<StockPrice> stockprice= stockpricerepo.findById(id);
		return ResponseEntity.ok(stockprice);
	}
	@GetMapping(path = "/stockprice/all")
	public ResponseEntity<List<StockPrice>> getAllStockPrice(){
		List<StockPrice> stockprice= stockpricerepo.findAll();
		return ResponseEntity.ok(stockprice);
	}
	
	@PostMapping("/import")
	public StockPrice createStockPrice(@Valid @RequestBody StockPrice stockPrice) {
		return stockpricerepo.save(stockPrice);
	}
	//@DeleteMapping(path = "/StockPrice/delete_{id}")
	@GetMapping(path = "/stockprice/delete/{id}")
	public void deleteStockPrice(@PathVariable Long id) {
		stockpricerepo.deleteById(id);
	}
	@PostMapping(path = "/comparecompany")
	public ResponseEntity<?> companyComparison(@RequestBody CompanyCompareRequest compareRequest) 
	{
	
		Date fromDate = compareRequest.getFromPeriod();
		System.out.println(fromDate);
		Date toDate = compareRequest.getToPeriod();
		System.out.println(toDate);
        String companyName=compareRequest.getName();
    	System.out.println(companyName);
		String stockExchange=compareRequest.getStockExchangeName();
		System.out.println(stockExchange);
		System.out.println(compareRequest.getPeriodicity());
		
		
		List<StockPrice> result=null;
		result=stockpricerepo.getCompanyStockPriceInRange(fromDate, toDate,companyName,stockExchange);
		System.out.println(result);
		return ResponseEntity.ok(result);
	}
	
}







