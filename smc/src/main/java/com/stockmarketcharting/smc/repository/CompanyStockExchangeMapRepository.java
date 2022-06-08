package com.stockmarketcharting.smc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarketcharting.smc.entity.CompanyStockExchangeMap;

@Repository
public interface CompanyStockExchangeMapRepository extends JpaRepository<CompanyStockExchangeMap,Long>{

}
