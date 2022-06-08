package com.stockmarketcharting.smc.controller;



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

import com.stockmarketcharting.smc.entity.Company;
import com.stockmarketcharting.smc.entity.Sector;
import com.stockmarketcharting.smc.repository.SectorRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")  
public class SectorController {
	@Autowired
	SectorRepository secrepo;
	
	
	@GetMapping(path = "/sectors")
	public List<Sector> getAllSector(){
				return secrepo.findAll();
	}
	
	@GetMapping(path = "/sectors/{id}")
	public ResponseEntity<Sector> getSectorById(@PathVariable(value = "id") Long id){
		Sector sector= secrepo.findById(id).orElse(null);
		return ResponseEntity.ok().body(sector);
	}
	
	@PostMapping("/sectors/add")
	public Sector createSector(@Valid @RequestBody Sector sector) {
		return secrepo.save(sector);
	}
	
	@DeleteMapping("/sectors/delete/{id}")
	public Map<String, Boolean> deleteSector(@PathVariable(value = "id") Long id){
		Sector sector= secrepo.findById(id).orElse(null);

		secrepo.delete(sector);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@PutMapping("/sectors/update/{id}")
	public ResponseEntity<Sector> updateSector(@PathVariable(value = "id") Long id,
			@Valid @RequestBody Sector sector){
		Sector sectordt= secrepo.findById(id).orElse(null);

		sectordt.setSectorName(sector.getSectorName());
		sectordt.setBrief(sector.getBrief());
		final Sector updatedSector= secrepo.save(sectordt);
		return ResponseEntity.ok(updatedSector);
	}
	
	//get company StockPrice details
			@GetMapping(path="/sectors/{id}/companies")
			public ResponseEntity<List<Company>> getCompanyBySector(@PathVariable Long id){
				Optional<Sector> sector = secrepo.findById(id);
				if(!sector.isPresent())
					return null;
				List<Company> company=sector.get().getCompany();
				return ResponseEntity.ok(company);
			}
	}







