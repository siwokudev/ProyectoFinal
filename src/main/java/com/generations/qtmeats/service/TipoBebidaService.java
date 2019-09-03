package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.TipoBebida;
import com.generations.qtmeats.repository.TipoBebidaRepository;

@Service
public class TipoBebidaService {
	
	@Autowired
	private TipoBebidaRepository repo;
	
	public List<TipoBebida> getAll(){
		return (List<TipoBebida>) repo.findAll();
	}
	
	public TipoBebida getById(Integer id) {
		TipoBebida tipoBebida = null;
		Optional<TipoBebida> opt = repo.findById(id);
		if(opt.isPresent()) {
			tipoBebida = opt.get();
		} else {
			tipoBebida = new TipoBebida();
			tipoBebida.setId(-1);
		}
		
		return tipoBebida;
	}
	
	public TipoBebida save(TipoBebida tipo) {
		TipoBebida tipoBebida = new TipoBebida();
		Optional<TipoBebida> opt = repo.findById(tipo.getId());
		
		if(!opt.isPresent()) {
			tipoBebida.setTipo(tipo.getTipo());
			repo.save(tipoBebida);
		} else {
			tipoBebida.setId(-1);
		}
		
		return tipoBebida;
	}
	
	public TipoBebida update(TipoBebida tipo, Integer id) {
		TipoBebida tipoBebida = null;
		Optional<TipoBebida> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			Optional<TipoBebida> optTipo = repo.findByTipo(tipo.getTipo());
			if(!optTipo.isPresent()) {
				tipoBebida = opt.get();
				tipoBebida.setTipo(tipo.getTipo());
				repo.save(tipoBebida);
			}
		} else {
			tipoBebida = new TipoBebida();
			tipoBebida.setId(-1);
		}
		
		return tipoBebida;
	}
	
	public void delete(Integer id) {
		Optional<TipoBebida> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			repo.deleteById(id);
		}
	}
	
}
