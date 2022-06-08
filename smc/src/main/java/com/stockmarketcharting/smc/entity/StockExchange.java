package com.stockmarketcharting.smc.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "StockExchange")
public class StockExchange {
	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String address;
	private String remarks; 
	

	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinTable(name="stockexchange_company",
	joinColumns= {@JoinColumn(name="stockexchange_id")},
	inverseJoinColumns= {@JoinColumn(name="company_id")})
	private List<Company> company;
	
	

	public List<Company> getCompany() {
		return company;
	}

	public void setCompany(List<Company> company) {
		this.company = company;
	}

	

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public StockExchange(long id, String name, String address, String remarks, List<Company> company) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.remarks = remarks;
		this.company = company;
	}

	public StockExchange() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
}