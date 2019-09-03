package com.generations.qtmeats.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name = "producto")
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //para autoincrementables
	@Column(name = "id", nullable = false)
	private int id;
	
	@Column(name = "nombre", nullable = false)
	private String nombre;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = true)
	@JoinColumn(name = "tipo_producto", nullable = true)
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	private TipoProducto tipoProducto;

	@ManyToOne(fetch = FetchType.EAGER, optional = true)
	@JoinColumn(name = "tipo_comida", nullable = true)
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	private TipoComida tipoComida;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = true)
	@JoinColumn(name = "tipo_bebida", nullable = true)
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	private TipoBebida tipoBebida;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = true)
	@JoinColumn(name = "tipo_dulces", nullable = true)
	@OnDelete(action = OnDeleteAction.NO_ACTION)
	private TipoDulces tipoDulce;
	
	@Column(name = "precio", nullable = false)
	private float precio;

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

	public TipoProducto getTipoProducto() {
		return tipoProducto;
	}

	public void setTipoProducto(TipoProducto tipoProducto) {
		this.tipoProducto = tipoProducto;
	}

	public TipoComida getTipoComida() {
		return tipoComida;
	}

	public void setTipoComida(TipoComida tipoComida) {
		this.tipoComida = tipoComida;
	}

	public TipoBebida getTipoBebida() {
		return tipoBebida;
	}

	public void setTipoBebida(TipoBebida tipoBebida) {
		this.tipoBebida = tipoBebida;
	}

	public TipoDulces getTipoDulce() {
		return tipoDulce;
	}

	public void setTipoDulce(TipoDulces tipoDulce) {
		this.tipoDulce = tipoDulce;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}
	


}
