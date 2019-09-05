$(document).ready(function() {
	//alert("tipoBebida funcionando");
	$("#btnTipoBebidasGrl").on("click", requestTipoBebida);
	$("#btnModTipoBebida").on("click", updateTipoBebidaSend);
	
});

let _selectedTipoBebida;

function botnAgregarDraw(){
	const $btnAgregar = $("<button id='btnAgregar' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty().append($btnAgregar);
	
	const $formBody = $("#modalAgregarNuevo");
	$formBody.empty()
		.append($("<div class='form-group'/>")
			.append("<label for='modalTipoBebida'>Tipo </label>"+
	"<input id='modalTipoBebida' type='text' value=''>"));
	
	$("#btnAgregar").on("click",btnAgregarModalShow);
}

function btnAgregarModalShow(){
	//modalAgregarNuevo
	$("#agregarModal").modal("show");
	$("#btnModAgregar").on("click",agregarNuevo)
}

function agregarNuevo(){
	const tipoEnModal = $("#modalTipoBebida").val();

	$.ajax({
		method : "POST",
		url : "/tipo-bebida",
		contentType : "application/json",
		data : JSON.stringify({
			tipo: tipoEnModal
		})
	}).done(function(msg) {
		requestTipoBebida();
		alert("TipoBebida Aagregada ");
	}).fail(function(err) {
		console.log(err);
	});
	
	$("#agregarModal").modal("hide");
}

function addUpdateTipoBebidaEvent($element, tipoBebida) {
	$element.on("click", function() {
		updateTipoBebida(tipoBebida);
	});
}

function addDeleteTipoBebidaEvent($element, tipoBebida) {
	$element.on("click", function() {
		deleteTipoBebida(tipoBebida);
	});
}

function requestTipoBebida() {
	botnAgregarDraw();
	//alert("request tipoBebida");
	$.get("/tipo-bebida", function(data) { // success callback
		setTipoBebida(data);
	}).fail(function(err) {
		alert(err);
	});
}

function setTipoBebida(tipoBebida) {
	//alert(JSON.stringify(tipoBebida));
	const $tipoBebidaBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("TipoBebida");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Tipo")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	tipoBebida
			.forEach(function(tipoBebida) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateTipoBebidaEvent($btnModificar, tipoBebida);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteTipoBebidaEvent($btnBorrar, tipoBebida);

				// $tableBody.append($("<tr />").addClass(claseEstado) //para
				// cambair el color dependiendo del estado
				$tableBody.append($("<tr />").attr("id",
						"comanda-" + tipoBebida.id).append(
						$("<td />").text(tipoBebida.tipo)).append(
						$("<td />").append($btnModificar)).append(
						$("<td />").append($btnBorrar))

				);
			});

	$table.append($tableBody);

	$tipoBebidaBody.append($header).append($table);
	$("#resultRequest").empty().append($tipoBebidaBody);
}

function updateTipoBebida(tipoBebida) {
	_selectedTipoBebida = tipoBebida;
	$("#tipoBebidaModNombre").val(tipoBebida.tipo);
	$("#modificarTipoBebidaModal").modal("show");
}

function updateTipoBebidaSend() {
	
	const tipo = $("#tipoBebidaModNombre").val();
	alert("Update tipoBebida: "+tipo);
	alert("/tipo-bebida/" + _selectedTipoBebida.id);
	$.ajax({
		method : "PUT",
		url : "/tipo-bebida/" + _selectedTipoBebida.id,
		contentType : "application/json",
		data : JSON.stringify({
			tipo: tipo
		})
	}).done(function(msg) {
		requestTipoBebida();
		alert("TipoBebida Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarTipoBebidaModal").modal("hide");
}

function deleteTipoBebida(tipoBebida) {
	$.ajax({
		method : "DELETE",
		url : "/tipo-bebida/" + tipoBebida.id,
	}).done(function(msg) {
		requestTipoBebida();
		alert("TipoBebida borrada ");
	});
}
