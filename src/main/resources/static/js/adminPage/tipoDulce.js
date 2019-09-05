$(document).ready(function() {
	////alert("tipoDulce funcionando");
	$("#btnTipoDulceGrl").on("click", requestTipoDulce);
	$("#btnModTipoDulce").on("click", updateTipoDulceSend);
	
});

let _selectedTipoDulce;

function bbotnAgregarDulceErase(){
	const $btnAgregar = $("<button id='btnAgregar' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty();
}

function botnAgregarDulceDraw(){
	const $btnAgregar = $("<button id='btnAgregar' class='btnAgregar btn btn-success' type='button'>Agregar</button>");
	$("#addRequest").empty().append($btnAgregar);
	
	const $formBody = $("#modalAgregarNuevo");
	$formBody.empty()
		.append($("<div class='form-group'/>")
			.append("<label for='modalTipoDulce'>Tipo </label>"+
	"<input id='modalTipoDulce' type='text' value=''>"));
	
	$("#btnAgregar").on("click",btnAgregarDulceModalShow);
}

function btnAgregarDulceModalShow(){
	
	$("#botonModalAgregarContainer")
		.empty()
		.append($("<button id='btnModAgregarDulce' type='button' class='btn btn-primary'/>").text("Agregar"));
	//modalAgregarNuevo
	$("#agregarModal").modal("show");
	$("#btnModAgregarDulce").on("click",agregarNuevoDulce)
}

function agregarNuevoDulce(){
	const tipoEnModal = $("#modalTipoDulce").val();

	$.ajax({
		method : "POST",
		url : "/tipo-dulces",
		contentType : "application/json",
		data : JSON.stringify({
			tipo: tipoEnModal
		})
	}).done(function(msg) {
		requestTipoDulce();
		//alert("TipoDulce Aagregada ");
	}).fail(function(err) {
		console.log(err);
	});
	
	$("#agregarModal").modal("hide");
}

function addUpdateTipoDulceEvent($element, tipoDulce) {
	$element.on("click", function() {
		updateTipoDulce(tipoDulce);
	});
}

function addDeleteTipoDulceEvent($element, tipoDulce) {
	$element.on("click", function() {
		deleteTipoDulce(tipoDulce);
	});
}

function requestTipoDulce() {
	botnAgregarDulceDraw();
	////alert("request tipoDulce");
	$.get("/tipo-dulces", function(data) { // success callback
		setTipoDulce(data);
	}).fail(function(err) {
		//alert(err);
	});
}

function setTipoDulce(tipoDulce) {
	////alert(JSON.stringify(tipoDulce));
	const $tipoDulceBody = $("<div class='col-12'/>");
	const $header = $("<h2 />").text("TipoDulce");

	const $table = $("<table class='table' />").append(
			$("<thead />").append(
					$("<tr />").append($("<th />").text("Tipo")).append(
							$("<th />").text("Modificar")).append(
							$("<th />").text("Borrar"))));

	const $tableBody = $("<tbody />");

	tipoDulce
			.forEach(function(tipoDulce) {
				const $btnModificar = $("<button class='btnModificar btn btn-primary' type='button'>Modificar</button>");
				addUpdateTipoDulceEvent($btnModificar, tipoDulce);
				const $btnBorrar = $("<button class='btnBorrar btn btn-danger' type='button'>Borrar</button>");
				addDeleteTipoDulceEvent($btnBorrar, tipoDulce);

				// $tableBody.append($("<tr />").addClass(claseEstado) //para
				// cambair el color dependiendo del estado
				$tableBody.append($("<tr />").attr("id",
						"comanda-" + tipoDulce.id).append(
						$("<td />").text(tipoDulce.tipo)).append(
						$("<td />").append($btnModificar)).append(
						$("<td />").append($btnBorrar)
								)

				);
			});

	$table.append($tableBody);

	$tipoDulceBody.append($header).append($table);
	$("#resultRequest").empty().append($tipoDulceBody);
}

function updateTipoDulce(tipoDulce) {
	_selectedTipoDulce = tipoDulce;
	$("#tipoDulceModNombre").val(tipoDulce.tipo);
	$("#modificarTipoDulceModal").modal("show");
}

function updateTipoDulceSend() {
	
	const tipo = $("#tipoDulceModNombre").val();
	//alert("Update tipoDulce: "+tipo);
	//alert("/tipo-dulce/" + _selectedTipoDulce.id);
	$.ajax({
		method : "PUT",
		url : "/tipo-dulces/" + _selectedTipoDulce.id,
		contentType : "application/json",
		data : JSON.stringify({
			tipo: tipo
		})
	}).done(function(msg) {
		requestTipoDulce();
		//alert("TipoDulce Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});

	$("#modificarTipoDulceModal").modal("hide");
}

function deleteTipoDulce(tipoDulce) {
	$.ajax({
		method : "DELETE",
		url : "/tipo-dulces/" + tipoDulce.id,
	}).done(function(msg) {
		requestTipoDulce();
		//alert("TipoDulce borrada ");
	});
}
