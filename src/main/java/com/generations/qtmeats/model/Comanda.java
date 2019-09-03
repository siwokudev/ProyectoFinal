package com.generations.qtmeats.model;


import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "comanda")
public class Comanda {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // para autoincrementables
	@Column(name = "id", nullable = false)
	private int id;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "usuario", nullable = false)
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	private Usuario usuario;

	@Column(name = "total", nullable = false)
	private Float total;

	@Column(name = "comentarios", nullable = true)
	private String comentarios;

	@Column(name = "direccion", nullable = true)
	private String direccionEntrega;

	@ManyToMany(cascade = {CascadeType.ALL}, fetch= FetchType.EAGER)
	@JoinTable(name = "comanda_has_producto",
		joinColumns = { @JoinColumn(name = "id_comanda", referencedColumnName = "id") },
		inverseJoinColumns = { @JoinColumn(name = "id_producto", referencedColumnName = "id") } )
	private List<Producto> productos;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Float getTotal() {
		return total;
	}

	public void setTotal(Float total) {
		this.total = total;
	}

	public String getComentarios() {
		return comentarios;
	}

	public void setComentarios(String comentarios) {
		this.comentarios = comentarios;
	}

	public String getDireccionEntrega() {
		return direccionEntrega;
	}

	public void setDireccionEntrega(String direccionEntrega) {
		this.direccionEntrega = direccionEntrega;
	}

	public List<Producto> getProductos() {
		return productos;
	}

	public void setProductos(List<Producto> productos) {
		this.productos = productos;
	}

}
