package com.stockmarketcharting.smc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarketcharting.smc.entity.Sector;



@Repository
public interface SectorRepository extends JpaRepository<Sector,Long> {

}
