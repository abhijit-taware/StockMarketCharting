package com.stockmarketcharting.smc.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stockmarketcharting.smc.entity.StockPrice;



@Repository
public interface StockPriceRepository extends JpaRepository<StockPrice,Long> {
	//public List<StockPrice> findByCompanyCodeAndStockExchangeName(Integer companyCode, String stockExchangeName); 
	
	@Query(value="select stock_price.* from stock_price  JOIN company  WHERE company.company_name=:companyName and stock_price.stock_exchange_name=:stockExchange and stock_price.date between :start and :end",nativeQuery=true)
	List<StockPrice> getCompanyStockPriceInRange(@Param("start") Date start, @Param("end") Date end,@Param("companyName") String companyName,@Param("stockExchange") String stockExchange);

}
