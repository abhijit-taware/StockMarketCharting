package com.smc.api.apigateway.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smc.api.apigateway.dao.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

}