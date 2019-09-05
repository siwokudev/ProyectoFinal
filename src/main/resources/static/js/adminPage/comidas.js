$(document).ready(function() {
	//alert("comidas funcionando");
	$("#btnComidasGrl").on("click", requestComidas);
	$("#btnModComida").on("click", updateComidaSend);
});

let _selectedComida;
let listaTipoComida;

function botnAgregarComidaErase(){
	//const $btnAgregarComida = $("<button id='btnAgregar' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty();
}


function saveListaComidas(tipoComida){
	listaTipoComida = tipoComida;
}


function botnAgregarComidaDraw(){
	const $btnAgregarComida = $("<button id='btnAgregarComida' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty().append($btnAgregarComida);
	
	
	const $select = $("<div class='form-group'/>");
	$select.append($("<label for='FormControlSelect'>Tipo Comidma</label>")).append(
			$("<select class='form-control' id='FormControlSelect'>"));
	
	const $formBody = $("#modalAgregarNuevo");
	$formBody.empty()
		.append($("<div class='form-group'/>")
			.append("<label for='modalComidaNombre'>Nombre </label>"+
					"<input id='modalComidaNombre' type='text' value='' placeholder='Nombre'>")
			.append("<label for='modalComidaTipo'>Tipo Comida</label>"+
					"<input id='modalComidaTipo' type='text' value='' placeholder='Tipo de Comida'>")
			.append("<label for='modalComidaPrecio'>Precio </label>"+
					"<input id='modalComidaPrecio' type='number' value='0.0'>"));

	$("#btnAgregarComida").on("click",btnAgregarComidaModalShow);
}

function btnAgregarComidaModalShow(){
	$("#agregarModal").modal("show");
	$("#btnModAgregar").on("click",agregarNuevoComida)
}

function agregarNuevoComida(){
	const nombre = $("#modalComidaNombre").val();
	const tipo = $("#modalComidaTipo").val();
	const precio = $("#modalComidaPrecio").val();

	$.ajax({
		method : "POST",
		url : "/producto",
		contentType : "application/json",
		data : JSON.stringify({
			nombre:nombre,
			tipoProducto:{
				id:1 //Comida
			},
			tipoComida:{
				id:4
			},
			tipoBebida:null,
			tipoDulce:null,
			precio:precio	
		})
	}).done(function(msg) {
		requestComidas();
		alert("Comida Aagregada ");
	}).fail(function(err) {
		console.log(err);
	});
	
	$("#agregarModal").modal("hide");
}

function addUpdateComidaEvent($element, comida) {
	$element.on("click", function() {
		updateComida(comida);
	});
}

function addDeleteComidaEvent($element, comida) {
	$element.on("click", function() {
		deleteComida(comida);
	});
}

function requestComidas() {
	botnAgregarComidaErase();
	botnAgregarComidaDraw(listaTipoComida);
	$.get("/producto/tipo/comidas", function(data) { // success callback
		setComidas(data);
	}).fail(function(err) {
		alert(err);
	});
}

function setComidas(producto) {
	//alert(JSON.stringify(producto));
	const $comidasBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("Comidas");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Nombre")).append(
							$("<th />").text("Tipo comida")).append(
							$("<th />").text("Precio")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	producto
			.forEach(function(producto) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateComidaEvent($btnModificar, producto);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteComidaEvent($btnBorrar, producto);

				// $tableBody.append($("<tr />").addClass(claseEstado) //para
				// cambair el color dependiendo del estado
				$tableBody.append($("<tr />").attr("id",
						"comanda-" + producto.id).append(
						$("<td />").text(producto.nombre)).append(
						$("<td />").text(producto.tipoComida.tipo)).append(
						$("<td />").text(producto.precio)).append(
						$("<td />").append($btnModificar)).append(
						$("<td />").append($btnBorrar))

				);
			});

	$table.append($tableBody);

	$comidasBody.append($header).append($table);
	$("#resultRequest").empty().append($comidasBody);
}

function updateComida(comida) {
	_selectedComida = comida;
	$("#comidaModNombre").val(comida.nombre);
	$("#comidaModPrecio").val(comida.precio);

	$("#modificarComidaModal").modal("show");
}

function updateComidaSend() {
	//alert("Update comida");
	const precio = parseInt($("#comidaModPrecio").val(), 10);
	const nombre = $("#comidaModNombre").val();

	$.ajax({
		method : "PUT",
		url : "/producto/" + _selectedComida.id,
		contentType : "application/json",
		data : JSON.stringify({
			nombre: nombre,
			tipoProducto: _selectedComida.tipoProducto,
			tipoComida: _selectedComida.tipoComida,
			tipoBebida: _selectedComida.tipoBebida,
			tipoDulces: _selectedComida.tipoDulce,
			precio: precio
		})
	}).done(function(msg) {
		requestComidas();
		alert("Comida Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarComidaModal").modal("hide");
}

function deleteComida(comida) {
	$.ajax({
		method : "DELETE",
		url : "/producto/" + comida.id,
	}).done(function(msg) {
		requestComidas();
		alert("Comida borrada ");
	});
}
