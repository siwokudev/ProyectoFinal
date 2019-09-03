package com.generations.qtmeats.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.generations.qtmeats.model.TipoBebida;


@Repository
public interface TipoBebidaRepository extends CrudRepository<TipoBebida, Integer> {
	Optional<TipoBebida> findByTipo(String tipo);
}
