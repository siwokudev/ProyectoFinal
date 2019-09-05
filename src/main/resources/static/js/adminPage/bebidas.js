$(document).ready(function() {
	//alert("comidas funcionando");
	$("#btnBebidasGrl").on("click", requestBebidas);
	$("#btnModBebida").on("click", updateBebidaSend);
});

let _selectedBebida;

function addUpdateBebidaEvent($element, bebida) {
	$element.on("click", function() {
		updateBebida(bebida);
	});
}

function addDeleteBebidaEvent($element, bebida) {
	$element.on("click", function() {
		deleteBebida(bebida);
	});
}

function requestBebidas() {
	//alert("request comidas");
	$("#addRequest").empty();
	$.get("/producto/tipo/bebidas", function(data) { // success callback
		setBebidas(data);
	}).fail(function(err) {
		alert(err);
	});
}

function setBebidas(producto) {
	//alert(JSON.stringify(producto));
	const $bebidasBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("Bebidas");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Nombre")).append(
							$("<th />").text("Tipo bebida")).append(
							$("<th />").text("Precio")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	producto
			.forEach(function(producto) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateBebidaEvent($btnModificar, producto);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteBebidaEvent($btnBorrar, producto);

				// $tableBody.append($("<tr />").addClass(claseEstado) //para
				// cambair el color dependiendo del estado
				$tableBody.append($("<tr />").attr("id",
						"comanda-" + producto.id).append(
						$("<td />").text(producto.nombre)).append(
						$("<td />").text(producto.tipoProducto.tipo)).append(
						$("<td />").text(producto.precio)).append(
						$("<td />").append($btnModificar)).append(
						$("<td />").append($btnBorrar))

				);
			});

	$table.append($tableBody);

	$bebidasBody.append($header).append($table);
	$("#resultRequest").empty().append($bebidasBody);
}

function updateBebida(bebida) {
	_selectedBebida = bebida;
	$("#bebidaModNombre").val(bebida.nombre);
	$("#bebidaModPrecio").val(bebida.precio);

	$("#modificarBebidaModal").modal("show");
}

function updateBebidaSend() {
	//alert("Update bebida "+_selectedBebida.id);
	const precio = parseInt($("#bebidaModPrecio").val(), 10);
	const nombre = $("#bebidaModNombre").val();

	$.ajax({
		method : "PUT",
		url : "/producto/" + _selectedBebida.id,
		contentType : "application/json",
		data : JSON.stringify({
			nombre: nombre,
			tipoProducto: _selectedBebida.tipoProducto,
			tipoComida: _selectedBebida.tipoComida,
			tipoBebida: _selectedBebida.tipoBebida,
			tipoDulces: _selectedBebida.tipoDulce,
			precio: precio
		})
	}).done(function(msg) {
		requestBebidas();
		alert("Bebida Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarBebidaModal").modal("hide");
}

function deleteBebida(bebida) {
	$.ajax({
		method : "DELETE",
		url : "/producto/" + bebida.id,
	}).done(function(msg) {
		requestBebidas();
		alert("Bebida borrada ");
	});
}
