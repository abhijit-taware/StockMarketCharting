package com.stockmarketcharting.smc.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyCompareRequest 
{
	private String  name;
	private String stockExchangeName;
	private Date fromPeriod;
	private Date toPeriod;
	private String periodicity;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStockExchangeName() {
		return stockExchangeName;
	}
	public void setStockExchangeName(String stockExchangeName) {
		this.stockExchangeName = stockExchangeName;
	}
	public Date getFromPeriod() {
		return fromPeriod;
	}
	public void setFromPeriod(Date fromPeriod) {
		this.fromPeriod = fromPeriod;
	}
	public Date getToPeriod() {
		return toPeriod;
	}
	public void setToPeriod(Date toPeriod) {
		this.toPeriod = toPeriod;
	}
	public String getPeriodicity() {
		return periodicity;
	}
	public void setPeriodicity(String periodicity) {
		this.periodicity = periodicity;
	}
	
	
}
