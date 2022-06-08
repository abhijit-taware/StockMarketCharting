package com.smc.api.apigateway.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class AuthenticationResponse {
    private String username;
    private Boolean admin;
    private String jwt;
    
    public AuthenticationResponse() {}
    
    
	public AuthenticationResponse(String username, Boolean admin, String jwt) {
		super();
		this.username = username;
		this.admin = admin;
		this.jwt = jwt;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Boolean getAdmin() {
		return admin;
	}
	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
    
    
    
    
}