package com.smc.api.apigateway.dao;

import javax.persistence.*;

@Entity

@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;


    private String username;


    private String password;


    private boolean admin;


    private String email;


    private String phone;


    private boolean confirmed;
    
    public User() {}


	public User(Long id, String username, String password, boolean admin, String email, String phone,
			boolean confirmed) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.admin = admin;
		this.email = email;
		this.phone = phone;
		this.confirmed = confirmed;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public boolean isAdmin() {
		return admin;
	}


	public void setAdmin(boolean admin) {
		this.admin = admin;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public boolean isConfirmed() {
		return confirmed;
	}


	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}
    
    
    

}
