$(document).ready(function() {
	//alert("comidas funcionando");
	$("#btnComidasGrl").on("click", requestComidas);
	$("#btnModComida").on("click", updateComidaSend);
});

let _selectedComida;

function addUpdateEvent($element, comida) {
	$element.on("click", function() {
		updateComida(comida);
	});
}

function addDeleteEvent($element, comida) {
	$element.on("click", function() {
		deleteComida(comida);
	});
}

function requestComidas() {
	//alert("request comidas");
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
				addUpdateEvent($btnModificar, producto);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteEvent($btnBorrar, producto);

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

	$comidasBody.append($header).append($table);
	$("#resultRequest").empty().append($comidasBody);
}

function updateComida(comida) {
	_selectedComida = comida;
	$("#estadoComidaSelect").val(comida.estado);
	$("#modificarComidaModal").modal("show");
}

function updateComidaSend() {
	alert("Update comida send funcionalidad faltante");
	//const estado = parseInt($("#estadoComidaSelect").val(), 10);
/*
	$.ajax({
		method : "PUT",
		url : "/producto/" + _selectedComida.id,
		contentType : "application/json",
		data : JSON.stringify({
			//enviar nuevo producto
		})
	}).done(function(msg) {
		requestComida();
		alert("Comida Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});
*/
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