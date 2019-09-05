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

import com.generations.qtmeats.model.Usuario;
import com.generations.qtmeats.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	@Autowired
	private UsuarioService service;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Usuario> doGet() {
		return service.getAll();
	}
	
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Usuario doGetById(@PathVariable("id") Integer id) {
		return service.getById(id);
	}
	
	
	@GetMapping(value = "/nombre/{alias}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Usuario doGetByName(@PathVariable("alias") String nombre) {
		return service.getByName(nombre);
	}
	
	@GetMapping(value = "/correo/{correo}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Usuario doGetByEmail(@PathVariable("correo") String correo) {
		return service.getByEmail(correo);
	}
	//doGetByName & doGetByEmail
	
	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Usuario doPost(@RequestBody Usuario usuario) {
		
		return service.save(usuario);
		
	}
	
	@PutMapping(value= "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Usuario doPut(@RequestBody Usuario usuario, @PathVariable("id") Integer id) {
		return service.update(usuario, id);
	}
	
	@DeleteMapping(value= "/{id}")
	public void doDelete(@PathVariable("id") Integer id) {
		service.delete(id);
	}
}
