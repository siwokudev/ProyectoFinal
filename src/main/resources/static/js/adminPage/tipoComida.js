$(document).ready(function() {
	////alert("tipoComida funcionando");
	$("#btnTipoComidaGrl").on("click", requestTipoComida);
	$("#btnModTipoComida").on("click", updateTipoComidaSend);
	
});

let _selectedTipoComida;

function bbotnAgregarComidaErase(){
	const $btnAgregar = $("<button id='btnAgregar' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty();
}

function botnAgregarComidaDraw(){
	const $btnAgregar = $("<button id='btnAgregar' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty().append($btnAgregar);
	
	const $formBody = $("#modalAgregarNuevo");
	$formBody.empty()
		.append($("<div class='form-group'/>")
			.append("<label for='modalTipoComida'>Tipo </label>"+
	"<input id='modalTipoComida' type='text' value=''>"));
	
	$("#btnAgregar").on("click",btnAgregarComidaModalShow);
}

function btnAgregarComidaModalShow(){
	$("#botonModalAgregarContainer")
	.empty()
	.append($("<button id='btnModAgregarComida' type='button' class='btn btn-primary'/>").text("Agregar"));
	
	$("#agregarModal").modal("show");
	$("#btnModAgregarComida").on("click",agregarNuevoComida)
}

function agregarNuevoComida(){
	const tipoEnModal = $("#modalTipoComida").val();

	$.ajax({
		method : "POST",
		url : "/tipo-comida",
		contentType : "application/json",
		data : JSON.stringify({
			tipo: tipoEnModal
		})
	}).done(function(msg) {
		requestTipoComida();
		//alert("TipoComida Aagregada ");
	}).fail(function(err) {
		console.log(err);
	});
	
	$("#agregarModal").modal("hide");
}

function addUpdateTipoComidaEvent($element, tipoComida) {
	$element.on("click", function() {
		updateTipoComida(tipoComida);
	});
}

function addDeleteTipoComidaEvent($element, tipoComida) {
	$element.on("click", function() {
		deleteTipoComida(tipoComida);
	});
}

function requestTipoComida() {
	botnAgregarComidaDraw();
	////alert("request tipoComida");
	$.get("/tipo-comida", function(data) { // success callback
		setTipoComida(data);
	}).fail(function(err) {
		//alert(err);
	});
}

function setTipoComida(tipoComida) {
	////alert(JSON.stringify(tipoComida));
	const $tipoComidaBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("TipoComida");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Tipo")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	tipoComida
			.forEach(function(tipoComida) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateTipoComidaEvent($btnModificar, tipoComida);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteTipoComidaEvent($btnBorrar, tipoComida);

				// $tableBody.append($("<tr />").addClass(claseEstado) //para
				// cambair el color dependiendo del estado
				$tableBody.append($("<tr />").attr("id",
						"comanda-" + tipoComida.id).append(
						$("<td />").text(tipoComida.tipo)).append(
						$("<td />").append($btnModificar)).append(
						$("<td />").append($btnBorrar)
								)

				);
			});

	$table.append($tableBody);

	$tipoComidaBody.append($header).append($table);
	$("#resultRequest").empty().append($tipoComidaBody);
}

function updateTipoComida(tipoComida) {
	_selectedTipoComida = tipoComida;
	$("#tipoComidaModNombre").val(tipoComida.tipo);
	$("#modificarTipoComidaModal").modal("show");
}

function updateTipoComidaSend() {
	
	const tipo = $("#tipoComidaModNombre").val();
	//alert("Update tipoComida: "+tipo);
	//alert("/tipo-comida/" + _selectedTipoComida.id);
	$.ajax({
		method : "PUT",
		url : "/tipo-comida/" + _selectedTipoComida.id,
		contentType : "application/json",
		data : JSON.stringify({
			tipo: tipo
		})
	}).done(function(msg) {
		requestTipoComida();
		//alert("TipoComida Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarTipoComidaModal").modal("hide");
}

function deleteTipoComida(tipoComida) {
	$.ajax({
		method : "DELETE",
		url : "/tipo-comida/" + tipoComida.id,
	}).done(function(msg) {
		requestTipoComida();
		//alert("TipoComida borrada ");
	});
}
