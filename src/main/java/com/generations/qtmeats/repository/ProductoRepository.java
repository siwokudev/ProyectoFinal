package com.generations.qtmeats.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.Producto;


@Repository
public interface ProductoRepository extends CrudRepository<Producto, Integer> {
	Optional<Producto> findByNombre(String nombre);
}
