package com.generations.qtmeats.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.TipoDulces;

@Repository
public interface TipoDulcesRepository extends CrudRepository<TipoDulces, Integer> {

	Optional<TipoDulces> findByTipo(String tipo);
	
}
