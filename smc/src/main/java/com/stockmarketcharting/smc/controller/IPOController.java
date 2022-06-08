package com.stockmarketcharting.smc.controller;



import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.stockmarketcharting.smc.entity.IPODetail;
import com.stockmarketcharting.smc.repository.IPODetailRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")  
public class IPOController {
	@Autowired
	IPODetailRepository iporepo;
	
	@GetMapping(path = "/ipos")
	public List<IPODetail> getAllIPODetail(){
				return iporepo.findAll();
	}
	
	//Find y Id
	@GetMapping(path = "/ipos/{id}")
	public ResponseEntity<Optional<IPODetail>> getIPODetailDetails(@PathVariable Long id){
		Optional<IPODetail> ipo = iporepo.findById(id);
		return ResponseEntity.ok(ipo);
	}
	
	//Add A ipo
	@PostMapping("/ipos/add")
	public IPODetail createIPODetail(@Valid @RequestBody IPODetail ipo) {
		return iporepo.save(ipo);
	}
	
	@DeleteMapping("/ipos/delete/{id}")
	public Map<String, Boolean> deleteIPODetail(@PathVariable(value = "id") Long id){
		IPODetail ipo= iporepo.findById(id).orElse(null);

		iporepo.delete(ipo);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@PutMapping("/ipos/update/{id}")
	public ResponseEntity<IPODetail> updateIPODetail(@PathVariable(value = "id") Long id,
			@Valid @RequestBody IPODetail ipo){
		IPODetail ipodt= iporepo.findById(id).orElse(null);

		ipodt.setCompanyName(ipo.getCompanyName());
		ipodt.setStockExchange(ipo.getStockExchange());
		ipodt.setPrice(ipo.getPrice());
		ipodt.setShares(ipo.getShares());
		ipodt.setOpenDateTime(ipo.getOpenDateTime());
		ipodt.setRemarks(ipo.getRemarks());

		final IPODetail updatedIPODetail= iporepo.save(ipodt);
		return ResponseEntity.ok(updatedIPODetail);
	}
}







