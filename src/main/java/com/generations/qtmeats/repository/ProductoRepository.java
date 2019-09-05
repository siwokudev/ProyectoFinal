package com.generations.qtmeats.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.Producto;
import com.generations.qtmeats.model.TipoProducto;


@Repository
public interface ProductoRepository extends CrudRepository<Producto, Integer> {
	Optional<Producto> findByNombre(String nombre);
	List<Producto> findByTipoProducto(TipoProducto tipoProducto);
	
}
