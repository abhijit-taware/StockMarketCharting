package com.stockmarketcharting.smc.entity;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Company")
public class Company {
	@Id
	private long id;
	
	
	private String companyName;
	private Double turnover;
	private String ceo;
	private String boardofDirectors;
	private String sector;
	private String stockExchange;
	private String companyBrief;
	private int code;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinTable(name="company_ipo",
	joinColumns= {@JoinColumn(name="company_id")},
	inverseJoinColumns= {@JoinColumn(name="ipo_id")})
	private IPODetail ipo;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinTable(name="company_stockprice",
	joinColumns= {@JoinColumn(name="code")},
	inverseJoinColumns= {@JoinColumn(name="company_code")})
	private List<StockPrice> stockPrice;
	
	

	


	public Company(long id, String companyName, Double turnover, String ceo, String boardofDirectors, String sector,
			String companyBrief, int code, IPODetail ipo, List<StockPrice> stockPrice, String stockExchange) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.turnover = turnover;
		this.ceo = ceo;
		this.boardofDirectors = boardofDirectors;
		this.sector = sector;
		this.companyBrief = companyBrief;
		this.code = code;
		this.ipo = ipo;
		this.stockPrice = stockPrice;
		this.stockExchange=stockExchange;
	}

	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Double getTurnover() {
		return turnover;
	}

	public void setTurnover(Double turnover) {
		this.turnover = turnover;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getBoardofDirectors() {
		return boardofDirectors;
	}

	public void setBoardofDirectors(String boardofDirectors) {
		this.boardofDirectors = boardofDirectors;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getCompanyBrief() {
		return companyBrief;
	}

	public void setCompanyBrief(String companyBrief) {
		this.companyBrief = companyBrief;
	}

	public IPODetail getIpo() {
		return ipo;
	}

	public void setIpo(IPODetail ipo) {
		this.ipo = ipo;
	}

	public List<StockPrice> getStockPrice() {
		return stockPrice;
	}

	public void setStockPrice(List<StockPrice> stockPrice) {
		this.stockPrice = stockPrice;
	}

 public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	
	

	
	

	
}
