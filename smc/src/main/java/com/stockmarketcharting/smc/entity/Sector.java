package com.stockmarketcharting.smc.entity;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="Sector")
public class Sector {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable=false)
	private String sectorName;
	
	@Column(nullable=false)
	private String brief;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinTable(name="sector_company",
	joinColumns= {@JoinColumn(name="sector_id")},
	inverseJoinColumns= {@JoinColumn(name="company_id")})
	private List<Company> company;

	public Sector() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Sector(long id, String sectorName, String brief, List<Company> company) {
		super();
		this.id = id;
		this.sectorName = sectorName;
		this.brief = brief;
		this.company = company;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSectorName() {
		return sectorName;
	}

	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}



	public List<Company> getCompany() {
		return company;
	}



	public void setCompany(List<Company> company) {
		this.company = company;
	}
	
	
}
