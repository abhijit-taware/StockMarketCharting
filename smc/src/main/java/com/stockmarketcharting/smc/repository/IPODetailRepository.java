package com.stockmarketcharting.smc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarketcharting.smc.entity.IPODetail;

@Repository
public interface IPODetailRepository extends JpaRepository<IPODetail,Long> {

}
