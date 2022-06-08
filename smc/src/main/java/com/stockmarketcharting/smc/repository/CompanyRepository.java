package com.stockmarketcharting.smc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarketcharting.smc.entity.Company;
import com.stockmarketcharting.smc.entity.IPODetail;


@Repository
public interface CompanyRepository extends JpaRepository<Company,Long> {
	//public List<IPODetail> findByIPODetailCompanyCode(Long ComapnyCode);
}
