package com.generations.qtmeats.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generations.qtmeats.model.Usuario;

import com.generations.qtmeats.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repo;
	
	public List<Usuario> getAll(){
		return (List<Usuario>) repo.findAll();
	}
	
	public Usuario getById(Integer id) {
		Usuario usuario = null;
		Optional<Usuario> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			usuario = opt.get();
		} else {
			usuario = new Usuario();
			usuario.setId(-1);
		}
		
		return usuario;
	}
	
	public Usuario getByName(String nombre) {
		Usuario usuario = null;
		Optional<Usuario> opt = repo.findByNombre(nombre);
		
		if(opt.isPresent()) {
			usuario = opt.get();
		} else {
			usuario = new Usuario();
			usuario.setId(-1);
		}
		
		return usuario;
	}
	
	public Usuario getByEmail(String correo) {
		Usuario usuario = null;
		Optional<Usuario> opt = repo.findByCorreo(correo);
		
		if(opt.isPresent()) {
			usuario = opt.get();
		} else {
			usuario = new Usuario();
			usuario.setId(-1);
		}
		
		return usuario;
	}
	
	public Usuario save(Usuario usuario) {
		
		Usuario miUsuario = null;
		Optional<Usuario> optNombre = repo.findByNombre(usuario.getNombre());
		Optional<Usuario> optCorreo = repo.findByCorreo(usuario.getCorreo());
		
		if(!optNombre.isPresent() && !optCorreo.isPresent()) {
			miUsuario = usuario;
			repo.save(miUsuario);
		} else {
			miUsuario = new Usuario();
			miUsuario.setId(-1);
		}
		
		return miUsuario;
	}
	
	public Usuario update(Usuario usuarioInput, Integer id) {
		Usuario usuario = null;
		Optional<Usuario> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			usuario = opt.get();
			usuario.setNombre(usuarioInput.getNombre());
			usuario.setCorreo(usuarioInput.getCorreo());
			usuario.setContrasena(usuarioInput.getContrasena());
			usuario.setTelefono(usuarioInput.getTelefono());
			usuario.setEsAdmin(usuarioInput.getEsAdmin());
			usuario.setCompania(usuarioInput.getCompania());
			
			repo.save(usuario);
		} else {
			usuario = new Usuario();
			usuario.setId(-1);
		}
		
		return usuario;
	}
	
	
	public void delete(Integer id) {
		Optional<Usuario> opt = repo.findById(id);
		
		if(opt.isPresent()) {
			repo.deleteById(id);
		}
	}
	
}
