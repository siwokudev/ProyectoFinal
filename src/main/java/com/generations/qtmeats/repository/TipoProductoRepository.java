package com.generations.qtmeats.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.TipoProducto;

@Repository
public interface TipoProductoRepository extends CrudRepository<TipoProducto, Integer> {
	
	Optional<TipoProducto> findByTipo(String tipo);

}
