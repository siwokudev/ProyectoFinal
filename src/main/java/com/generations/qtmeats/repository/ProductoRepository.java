package com.generations.qtmeats.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generations.qtmeats.model.Producto;

@Repository
public interface ProductoRepository extends CrudRepository<Producto, Integer> {

}
