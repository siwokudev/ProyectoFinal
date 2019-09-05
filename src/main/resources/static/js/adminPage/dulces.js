$(document).ready(function() {
	//alert("comidas funcionando");
	$("#btnDulcesGrl").on("click", requestDulces);
	$("#btnModDulce").on("click", updateDulceSend);
});

let _selectedDulce;

function addUpdateDulceEvent($element, dulce) {
	$element.on("click", function() {
		updateDulces(dulce);
	});
}

function addDeleteDulceEvent($element, dulce) {
	$element.on("click", function() {
		deleteDulce(dulce);
	});
}

function requestDulces() {
	//alert("request comidas");
	$("#addRequest").empty();
	$.get("/producto/tipo/dulces", function(data) { // success callback
		setDulces(data);
	}).fail(function(err) {
		alert(err);
	});
}

function setDulces(producto) {
	//alert(JSON.stringify(producto));
	const $dulcesBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("Dulces");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Nombre")).append(
							$("<th />").text("Tipo dulce")).append(
							$("<th />").text("Precio")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	producto
			.forEach(function(producto) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateDulceEvent($btnModificar, producto);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteDulceEvent($btnBorrar, producto);

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

	$dulcesBody.append($header).append($table);
	$("#resultRequest").empty().append($dulcesBody);
}

function updateDulces(dulce) {
	_selectedDulce = dulce;
	$("#dulceModNombre").val(dulce.nombre);
	$("#dulceModPrecio").val(dulce.precio);

	$("#modificarDulceModal").modal("show");
}

function updateDulceSend() {
	alert("Update dulce ");
	const precio = parseInt($("#dulceModPrecio").val(), 10);
	const nombre = $("#dulceModNombre").val();

	$.ajax({
		method : "PUT",
		url : "/producto/" + _selectedDulce.id,
		contentType : "application/json",
		data : JSON.stringify({
			nombre: nombre,
			tipoProducto: _selectedDulce.tipoProducto,
			tipoComida: _selectedDulce.tipoComida,
			tipoBebida: _selectedDulce.tipoBebida,
			tipoDulces: _selectedDulce.tipoDulce,
			precio: precio
		})
	}).done(function(msg) {
		requestDulces();
		alert("Dulce Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarDulceModal").modal("hide");
}

function deleteDulce(dulce) {
	$.ajax({
		method : "DELETE",
		url : "/producto/" + dulce.id,
	}).done(function(msg) {
		requestDulces();
		alert("Dulce borrado ");
	});
}
