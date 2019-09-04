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

import com.generations.qtmeats.model.TipoProducto;
import com.generations.qtmeats.service.TipoProductoService;

@RestController
@RequestMapping("/tipo-producto")
public class TipoProductoController {
	
	@Autowired
	private TipoProductoService service;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<TipoProducto> doGet() {
		
		return service.getAll();
		
	}
	
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public TipoProducto doGetById(@PathVariable("id") Integer id) {
		
		return service.getById(id);
		
	}
	
	@GetMapping(value = "/tipo/{tipo}", produces = MediaType.APPLICATION_JSON_VALUE)
	public TipoProducto doGetByTipo(@PathVariable("tipo") String tipo) {
		
		return service.getByTipo(tipo);
		
	}

	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TipoProducto doPost(@RequestBody TipoProducto tipo) {
				
		return service.save(tipo);
		
	}
	
	@PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public TipoProducto doPut(@RequestBody TipoProducto tipo, @PathVariable("id") Integer id) {
				
		return service.update(tipo, id);
		
	}
	
	@DeleteMapping(value = "/{id}")
	public void doDelete(@PathVariable("id") Integer id) {
				
		service.delete(id);
		
	}

}
