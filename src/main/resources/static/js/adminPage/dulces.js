$(document).ready(function() {
	//alert("dulces funcionando");
	$("#btnDulcesGrl").on("click", requestDulces);
});



function requestDulces() {
	//alert("request dulces");
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

	$dulcesBody.append($header).append($table);
	$("#resultRequest").empty().append($dulcesBody);
}