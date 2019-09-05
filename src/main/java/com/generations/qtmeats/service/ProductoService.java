package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.Producto;
import com.generations.qtmeats.model.TipoProducto;
import com.generations.qtmeats.repository.ProductoRepository;
import com.generations.qtmeats.repository.TipoProductoRepository;

@Service
public class ProductoService {
	
	@Autowired
	private ProductoRepository repo;
	
	private TipoProductoRepository tipoProdRepo;
	
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
	
	public Producto getByNombre(String nombre) {
		Producto producto = null;
		Optional<Producto> opt = repo.findByNombre(nombre);
		
		if(opt.isPresent()) {
			producto = opt.get();
		} else {
			producto = new Producto();
			producto.setId(-1);
		}
		
		return producto;
	}
	
	public List<Producto> getByTipoProducto(Integer id) {
		TipoProducto tipoProducto = new TipoProducto();
		if(id == 1) {
			tipoProducto.setId(1);
		} else if(id == 2) {
			tipoProducto.setId(2);
		} else {
			tipoProducto.setId(7);
		}
		return repo.findByTipoProducto(tipoProducto);
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
