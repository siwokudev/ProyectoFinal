package com.generations.qtmeats.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.Comanda;

@Repository
public interface ComandaRepository extends CrudRepository<Comanda, Integer> {

}
