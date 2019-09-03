package com.generations.qtmeats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generations.qtmeats.model.Comanda;
import com.generations.qtmeats.service.ComandaService;

@RestController
@RequestMapping("/comanda")
public class ComandaController {
	@Autowired
	private ComandaService service;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Comanda> doGet() {
		return service.getAll();
	}
	
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Comanda doGetById(@PathVariable("id") Integer id) {
		return service.getById(id);
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Comanda doPost(@RequestBody Comanda comando) {
		
		return service.save(comando);
		
	}
	
	@DeleteMapping(value= "/{id}")
	public void doDelete(@PathVariable("id") Integer id) {
		service.delete(id);
	}
}
