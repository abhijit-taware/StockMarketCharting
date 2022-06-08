package com.stockmarketcharting.smc.entity;


import java.time.LocalDateTime;


import javax.persistence.Entity;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="IPODetail")
public class IPODetail {

	@Id
	private Long id;
	
	private String companyName;
	private String stockExchange;
	private double price;
	private int shares;
	private LocalDateTime openDateTime;
	private String remarks;
	

	public IPODetail() {
		super();
		// TODO Auto-generated constructor stub
	}
	


	public IPODetail(Long id, String companyName, String stockExchange, double price, int shares,
			LocalDateTime openDateTime, String remarks) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.stockExchange = stockExchange;
		this.price = price;
		this.shares = shares;
		this.openDateTime = openDateTime;
		this.remarks = remarks;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getShares() {
		return shares;
	}

	public void setShares(int shares) {
		this.shares = shares;
	}

	public LocalDateTime getOpenDateTime() {
		return openDateTime;
	}

	public void setOpenDateTime(LocalDateTime localDateTime) {
		this.openDateTime = localDateTime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	



}
