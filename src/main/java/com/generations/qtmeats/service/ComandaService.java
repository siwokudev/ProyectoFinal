package com.generations.qtmeats.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.Comanda;
import com.generations.qtmeats.model.Producto;
import com.generations.qtmeats.model.Usuario;
import com.generations.qtmeats.repository.ComandaRepository;
import com.generations.qtmeats.repository.ProductoRepository;
import com.generations.qtmeats.repository.UsuarioRepository;

@Service
public class ComandaService {
	
	@Autowired
	private ComandaRepository repo;
	
	@Autowired
	private UsuarioRepository userRepo;
	
	@Autowired
	private ProductoRepository prodRepo;
	
	public List<Comanda> getAll(){
		return (List<Comanda>) repo.findAll();
	}
	
	public Comanda getById(Integer id) {
		Comanda comanda = null;
		Optional<Comanda> opt = repo.findById(id);
		if(opt.isPresent()) {
			comanda = opt.get();
		} else {
			comanda = new Comanda();
			comanda.setId(-1);
		}
		
		return comanda;
	}
	
	public Comanda save(Comanda comanda) {
		
		List<Producto> productos = new ArrayList<Producto>();
		
		for(Producto producto : comanda.getProductos()) {
			
			System.out.println("Producto id es " + producto.getId());
			
			Optional<Producto> optProducto = prodRepo.findById(producto.getId());
			
			if (optProducto.isPresent()) {
				Producto pro = optProducto.get();
				
				productos.add(pro);
				
				System.out.println("se agrego");
			} else {
				System.out.println("no hay producto");
			}
			
		}
		
		Optional<Usuario> optUsuario = userRepo.findById(comanda.getUsuario().getId());
		if(optUsuario.isPresent()) {
			comanda.setUsuario(optUsuario.get());
		} else {
			comanda.setUsuario(null);
		}
		
		comanda.setProductos(null);
		comanda.setProductos(new ArrayList<Producto>());
		
		for(Producto producto : productos) {
			
			comanda.getProductos().add(producto);
			
		}
		
		repo.save(comanda);
		
		return comanda;
	}
	
	
	public void delete(Integer id) {
		Optional<Comanda> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			repo.deleteById(id);
		}
	}
	
}
