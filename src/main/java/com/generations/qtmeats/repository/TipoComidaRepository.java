package com.generations.qtmeats.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.TipoComida;

@Repository
public interface TipoComidaRepository extends CrudRepository<TipoComida, Integer>{
	Optional<TipoComida> findByTipo(String tipo);
}
