package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.TipoComida;
import com.generations.qtmeats.repository.TipoComidaRepository;

@Service
public class TipoComidaService {
	
	@Autowired
	private TipoComidaRepository repo;
	
	public List<TipoComida> getAll(){
		return (List<TipoComida>) repo.findAll();
	}
	
	public TipoComida getById(Integer id) {
		TipoComida tipoComida = null;
		Optional<TipoComida> opt = repo.findById(id);
		if(opt.isPresent()) {
			tipoComida = opt.get();
		} else {
			tipoComida = new TipoComida();
			tipoComida.setId(-1);
		}
		
		return tipoComida;
	}
	
	public TipoComida save(TipoComida tipo) {
		TipoComida tipoComida = new TipoComida();
		Optional<TipoComida> opt = repo.findById(tipo.getId());
		
		if(!opt.isPresent()) {
			tipoComida.setTipo(tipo.getTipo());
			repo.save(tipoComida);
		} else {
			tipoComida.setId(-1);
		}
		
		return tipoComida;
	}
	
	public TipoComida update(TipoComida tipo, Integer id) {
		TipoComida tipoComida = null;
		Optional<TipoComida> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			Optional<TipoComida> optTipo = repo.findByTipo(tipo.getTipo());
			if(!optTipo.isPresent()) {
				tipoComida = opt.get();
				tipoComida.setTipo(tipo.getTipo());
				repo.save(tipoComida);
			}
		} else {
			tipoComida = new TipoComida();
			tipoComida.setId(-1);
		}
		
		return tipoComida;
	}
	
	public void delete(Integer id) {
		Optional<TipoComida> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			repo.deleteById(id);
		}
	}

}
