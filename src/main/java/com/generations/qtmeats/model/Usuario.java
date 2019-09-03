package com.generations.qtmeats.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //para autoincrementables
	@Column(name = "id", nullable = false)
	private int id;
	
	@Column(name = "nombre", nullable = false, unique = true)
	private String nombre;
	
	@Column(name = "correo", nullable = false, unique = true)
	private String correo;
	
	@Column(name = "contraseña", nullable = false)
	private String contrasena;
	
	@Column(name = "telefono", nullable = true)
	private String telefono;
	
	@Column(name = "es_admin", nullable = false)
	private boolean esAdmin;
	
	@Column(name = "compañia", nullable = true)
	private String compania;

	public Usuario() {
	}

	public Usuario(int id, String nombre, String correo, String contrasena, String telefono, boolean esAdmin,
			String compania) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.correo = correo;
		this.contrasena = contrasena;
		this.telefono = telefono;
		this.esAdmin = esAdmin;
		this.compania = compania;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public boolean getEsAdmin() {
		return esAdmin;
	}

	public void setEsAdmin(boolean esAdmin) {
		this.esAdmin = esAdmin;
	}

	public String getCompania() {
		return compania;
	}

	public void setCompania(String compania) {
		this.compania = compania;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nombre=" + nombre + ", correo=" + correo + ", contrase�a=" + contrasena
				+ ", telefono=" + telefono + ", esAdmin=" + esAdmin + ", compa�ia=" + compania + "]";
	}

}
