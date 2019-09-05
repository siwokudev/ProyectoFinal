$(document).ready(function() {
	//alert("bebidas funcionando");
	$("#btnBebidasGrl").on("click", requestBebidas);
});



function requestBebidas() {
	//alert("request bebidas");
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

	$bebidasBody.append($header).append($table);
	$("#resultRequest").empty().append($bebidasBody);
}