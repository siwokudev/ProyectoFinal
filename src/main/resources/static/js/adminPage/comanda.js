$(document).ready(function() {
	$("#btnComandaGrl").on("click", requestComandas);
	$("#btnModComanda").on("click", updateComandaSend);
});


let _selectedComanda;

function addUpdateComandaEvent($element, comanda) {
	$element.on("click", function() {
		updateComanda(comanda);
	});
}

function addDeleteComandaEvent($element, comanda) {
	$element.on("click", function() {
		deleteComanda(comanda);
	});
}

function setComandas(comandas) {
	const $comandaBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("Comandas");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Cliente")).append(
							$("<th />").text("Total")).append(
							$("<th />").text("Dirección")).append(
							$("<th />").text("Comentarios")).append(
							$("<th />").text("Productos")).append(
							$("<th />").text("Estado")).append(
							$("<th />").text("Teléfono")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	comandas
			.forEach(function(comanda) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateComandaEvent($btnModificar, comanda);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteComandaEvent($btnBorrar, comanda);

				// $tableBody.append($("<tr />").addClass(claseEstado) //para
				// cambair el color dependiendo del estado
				$tableBody.append($("<tr />").attr("id",
						"comanda-" + comanda.id).append(
						$("<td />").text(comanda.usuario.nombre)).append(
						$("<td />").text(comanda.total)).append(
						$("<td />").text(comanda.direccionEntrega)).append(
						$("<td />").text(comanda.comentarios)).append(
						$("<td />").append(
								comanda.productos.reduce(function(accum, prod) {
									return accum.append($(
											"<li class='listaProductos' />")
											.text(prod.nombre));
								}, $("<ul />")))).append(
						$("<td />").text(estadoATexto(comanda.estado))).append(
						$("<td />").text(comanda.usuario.telefono)).append(
						$("<td />").append($btnModificar)).append(
						$("<td />").append($btnBorrar))

				);
			});

	$table.append($tableBody);

	$comandaBody.append($header).append($table);
	$("#resultRequest").empty().append($comandaBody);
}

function estadoATexto(estado) {
	switch (estado) {
	case 1:
		return "Lista";
	case 2:
		return "Pagada";
	case 3:
		return "Entregada";
	default:
		return "Recibida";
	}
}

function requestComandas() {
	$.get("/comanda", function(data) { // success callback
		setComandas(data);
	}).fail(function(err) {
		alert(err);
	});
}

function updateComanda(comanda) {
	_selectedComanda = comanda;
	$("#estadoComandaSelect").val(comanda.estado);
	$("#modificarComandaModal").modal("show");
}

function updateComandaSend() {
	const estado = parseInt($("#estadoComandaSelect").val(), 10);

	$.ajax({
		method : "PUT",
		url : "/comanda/" + _selectedComanda.id,
		contentType : "application/json",
		data : JSON.stringify({
			estado : estado
		})
	}).done(function(msg) {
		requestComandas();
		alert("Comanda Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarComandaModal").modal("hide");
}

function deleteComanda(comanda) {
	$.ajax({
		method : "DELETE",
		url : "/comanda/" + comanda.id,
	}).done(function(msg) {
		requestComandas();
		alert("Comanda borrada ");
	});
}
