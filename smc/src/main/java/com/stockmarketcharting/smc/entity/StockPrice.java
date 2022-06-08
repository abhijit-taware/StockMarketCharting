package com.stockmarketcharting.smc.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name = "StockPrice")
public class StockPrice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private int companyCode;
	private String stockExchangeName;
	private double price;
	private Date date;
	private LocalTime time;
	
	public StockPrice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StockPrice(long id, int companyCode, String stockExchangeName, double price, Date date,
			LocalTime time) {
		super();
		this.id = id;
		this.companyCode = companyCode;
		this.stockExchangeName = stockExchangeName;
		this.price = price;
		this.date = date;
		this.time = time;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(int companyCode) {
		this.companyCode = companyCode;
	}

	public String getStockExchangeName() {
		return stockExchangeName;
	}

	public void setStockExchangeName(String stockExchangeName) {
		this.stockExchangeName = stockExchangeName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	
	
	
	
	
}
