package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.TipoDulces;
import com.generations.qtmeats.repository.TipoDulcesRepository;

@Service
public class TipoDulcesService {
	
	@Autowired
	private TipoDulcesRepository repo;
	
	public List<TipoDulces> getAll() {
		return (List<TipoDulces>) repo.findAll();
	}
	
	public TipoDulces getById(Integer id) {
		TipoDulces tipoDulces = null;
		Optional<TipoDulces> opt = repo.findById(id);
		if(opt.isPresent()) {
			tipoDulces = opt.get();
		} else {
			tipoDulces.setId(-1);
		}
		
		return tipoDulces;
	}
	
	public TipoDulces save(TipoDulces objTipo) {
		TipoDulces tipoDulces = new TipoDulces();
		Optional<TipoDulces> opt = repo.findByTipo(objTipo.getTipo());
		
		if(opt.isPresent()) {
			tipoDulces.setId(-1);
		} else {
			tipoDulces.setTipo(objTipo.getTipo());
			repo.save(tipoDulces);
		}
		
		return tipoDulces;
	}
	
	public TipoDulces update(TipoDulces objTipo, Integer id) {
		TipoDulces tipoDulces = null;
		Optional<TipoDulces> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			Optional<TipoDulces> optTipo = repo.findByTipo(objTipo.getTipo());
			if(!optTipo.isPresent()) {
				tipoDulces = opt.get();
				tipoDulces.setTipo(objTipo.getTipo());
				repo.save(tipoDulces);
			}else {
				tipoDulces = new TipoDulces();
				tipoDulces.setId(-1);
			}
		} else {
			tipoDulces = new TipoDulces();
			tipoDulces.setId(-1);
		}
		
		return tipoDulces;
	}
	
	public void delete(Integer id) {
		Optional<TipoDulces> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			repo.deleteById(id);
		}
	}
}
