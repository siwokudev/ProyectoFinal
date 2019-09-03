package com.generations.qtmeats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generations.qtmeats.model.TipoDulces;
import com.generations.qtmeats.model.TipoProducto;
import com.generations.qtmeats.service.TipoDulcesService;

@RestController
@RequestMapping("/tipo-dulces")
public class TipoDulcesController {

	@Autowired
	private TipoDulcesService service;

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<TipoDulces> doGet() {
		return service.getAll();
	}
	
	@GetMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public TipoDulces doGetById(@PathVariable("id") Integer id) {
		return service.getById(id);
	}
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TipoDulces doPost(@RequestBody TipoDulces tipo) {
		return service.save(tipo);
	}
	
	@PutMapping(value="/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TipoDulces doPut(@RequestBody TipoDulces tipo, @PathVariable("id") Integer id) {
		return service.update(tipo, id);
	}

	@DeleteMapping(value="/{id}")
	public void doDelete(@PathVariable("id") Integer id) {
		service.delete(id);
	}
}
