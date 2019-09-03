package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.Producto;
import com.generations.qtmeats.repository.ProductoRepository;

@Service
public class ProductoService {
	
	@Autowired
	private ProductoRepository repo;
	
	public List<Producto> getAll(){
		return (List<Producto>) repo.findAll();
	}
	
	public Producto getById(Integer id) {
		Producto producto = null;
		Optional<Producto> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			producto = opt.get();
		} else {
			producto = new Producto();
			producto.setId(-1);
		}
		
		return producto;
	}
	
	public Producto save(Producto producto) {
		
		repo.save(producto);
		
		return producto;
	}
	
	public Producto update(Producto productoInput, Integer id) {
		Producto producto = null;
		Optional<Producto> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			producto = opt.get();
			producto.setNombre(productoInput.getNombre());
			producto.setPrecio(productoInput.getPrecio());
			
			producto.setTipoBebida(productoInput.getTipoBebida());
			producto.setTipoComida(productoInput.getTipoComida());
			producto.setTipoDulce(productoInput.getTipoDulce());
			producto.setTipoProducto(productoInput.getTipoProducto());
			
			repo.save(producto);
		} else {
			producto = new Producto();
			producto.setId(-1);
		}
		
		return producto;
	}
	
	
	public void delete(Integer id) {
		Optional<Producto> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			repo.deleteById(id);
		}
	}
	
}
