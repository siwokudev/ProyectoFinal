package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.TipoProducto;
import com.generations.qtmeats.repository.TipoProductoRepository;

@Service
public class TipoProductoService {
	
	@Autowired
	private TipoProductoRepository repo;
	
	public List<TipoProducto> getAll() {
		
		return (List<TipoProducto>) repo.findAll();
		
	}
	
	public TipoProducto getById(Integer id) {
		TipoProducto tipoProducto = null;
		Optional<TipoProducto> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			tipoProducto = opt.get();
		} else {
			tipoProducto = new TipoProducto();
			tipoProducto.setId(-1);
		}
		
		return tipoProducto;
	}
	
	public TipoProducto getByTipo(String tipo) {
		TipoProducto tipoProducto = null;
		Optional<TipoProducto> opt = repo.findByTipo(tipo);
		
		if(opt.isPresent()) {
			tipoProducto = opt.get();
		} else {
			tipoProducto = new TipoProducto();
			tipoProducto.setId(-1);
		}
		
		return tipoProducto;
	}
	
	public TipoProducto save(TipoProducto tipo) {
		TipoProducto tipoProducto = new TipoProducto();
		Optional<TipoProducto> opt = repo.findByTipo(tipo.getTipo());
		
		if (opt.isPresent()) {
			tipoProducto.setId(-1);
		} else {
			tipoProducto.setTipo(tipo.getTipo());
			tipoProducto = repo.save(tipoProducto);
		}
		
		return tipoProducto;
	}
	
	public TipoProducto update(TipoProducto tipo, Integer id) {
		TipoProducto tipoProducto = null;
		
		Optional<TipoProducto> optId = repo.findById(id);
		
		if (optId.isPresent()) {
			Optional<TipoProducto> optTipo = repo.findByTipo(tipo.getTipo());
			if(!optTipo.isPresent()) {
				tipoProducto = optId.get();
				tipoProducto.setTipo(tipo.getTipo());
				repo.save(tipoProducto);
			} else {
				tipoProducto = new TipoProducto();
				tipoProducto.setId(-1);
			}
		} else {
			tipoProducto = new TipoProducto();
			tipoProducto.setId(-1);
		}
		
		
		return tipoProducto;
	}
	
	public void delete(Integer id) {		
		Optional<TipoProducto> optId = repo.findById(id);
		
		if(optId.isPresent()) {
			repo.deleteById(id);
		} 

	}

}
