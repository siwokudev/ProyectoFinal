let xhr = new XMLHttpRequest();
let total = 0;
let listaOpcion = [];
let listaComentarios = [];

window.onload = function()
{
	var btnAgregarArizona = document.querySelector("#btnAgregarArizona");
	btnAgregarArizona.onclick = enviarPetArizona;
	
	var btnAgregarRefresco = document.querySelector("#btnAgregarRefresco");
	btnAgregarRefresco.onclick = enviarPetRefresco;
	
	var btnAgregarCafe = document.querySelector("#btnAgregarCafe");
	btnAgregarCafe.onclick = enviarPetCafe;
	
	var btnAgregarPapas = document.querySelector("#btnAgregarPapas");
	btnAgregarPapas.onclick = enviarPetPapas;
	
	var btnAgregarGalletas = document.querySelector("#btnAgregarGalletas");
	btnAgregarGalletas.onclick = enviarPetGalletas;
	
	var btnAgregarChocolates = document.querySelector("#btnAgregarChocolates");
	btnAgregarChocolates.onclick = enviarPetChocolates;
	
	var btnPagar = document.querySelector("#btnPagar");
	btnPagar.onclick = mandarComanda;
}

//call get Arizona
function enviarPetArizona()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionArizona").value;
    var comentarios = document.querySelector("#comentariosArizona").value;
    
    console.log(opcion, comentarios);
    listaComentarios.push(comentarios);
    
    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBackBebidas;
	xhr.send(null);
}
//call get refresco
function enviarPetRefresco()
{
    console.log("boton picado" + btnAgregar.value);

    var opcion = document.querySelector("#opcionRefresco").value;
    var comentarios = document.querySelector("#comentariosRefresco").value;
    
    console.log(opcion, comentarios);
    listaComentarios.push(comentarios);
    
    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBackBebidas;
	xhr.send(null);
}
//call get cafe
function enviarPetCafe()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionCafe").value;
    var comentarios = document.querySelector("#comentariosCafe").value;
    
    console.log(opcion, comentarios);
    listaComentarios.push(comentarios);

    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBackBebidas;
	xhr.send(null);
}
//call get papas
function enviarPetPapas()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionPapas").value;
    var comentarios = document.querySelector("#comentariosPapas").value;
    
    console.log(opcion, comentarios);
    listaComentarios.push(comentarios);

    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBackDulces;
	xhr.send(null);
}
//call get galletas
function enviarPetGalletas()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionGalletas").value;
    var comentarios = document.querySelector("#comentariosGalletas").value;
    
    console.log(opcion, comentarios);
    listaComentarios.push(comentarios);

    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBackDulces;
	xhr.send(null);
}
//call get Chocolates
function enviarPetChocolates()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionChocolates").value;
    var comentarios = document.querySelector("#comentariosChocolates").value;
    
    console.log(opcion, comentarios);
    listaComentarios.push(comentarios);

    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBackDulces;
	xhr.send(null);
}

//callBack bebidas
function functionCallBackBebidas()
{
    console.log(xhr.status);
    console.log(xhr.responseText);
    
	if(xhr.status == 200)
	{	
		var jsonReturned = JSON.parse(xhr.responseText);
		var displayNombre = "<p><h5>" + jsonReturned["nombre"] + ", " + jsonReturned.tipoBebida["tipo"] +"</h5></p>";
		var displayPrecio = "<p><h5>" + jsonReturned["precio"] + "</h5></p>";
		total += jsonReturned["precio"];
		listaOpcion.push(xhr.responseText);
		
		document.querySelector("#miOrdenNombre").innerHTML += displayNombre;
		document.querySelector("#miOrdenPrecio").innerHTML += displayPrecio;
		document.querySelector("#miOrdenTotal").innerHTML = total;	
	}
}
//callBack dulces
function functionCallBackDulces()
{
    console.log(xhr.status);
    console.log(xhr.responseText);
    
	if(xhr.status == 200)
	{	
		var jsonReturned = JSON.parse(xhr.responseText);
		var displayNombre = "<p><h5>" + jsonReturned["nombre"] + ", " + jsonReturned.tipoDulce["tipo"] +"</h5></p>";
		var displayPrecio = "<p><h5>" + jsonReturned["precio"] + "</h5></p>";
		total += jsonReturned["precio"];
		listaOpcion.push(xhr.responseText);
		
		document.querySelector("#miOrdenNombre").innerHTML += displayNombre;
		document.querySelector("#miOrdenPrecio").innerHTML += displayPrecio;
		document.querySelector("#miOrdenTotal").innerHTML = total;	
	}
}

function mandarComanda()
{
	let comanda = '{"usuario" : {"id" : 1}, "total" : '+total+ ', "comentarios" : "'+listaComentarios+'", "direccionEntrega" : "Generation", "estado" : 0, "productos": ['+listaOpcion+']	}';
	let comandaJson = JSON.parse(comanda);
	console.log(comanda);
	
	$.ajax({
		method : "POST",
		url : "/comanda",
		contentType : "application/json",
		data : JSON.stringify(comandaJson)
	}).done(function(msg) {
		alert("Pedido generado exitosamente");
	}).fail(function(err) {
		console.log(err);
	});
}
/*
function pagoStatus()
{
	console.log("boton pagar" + xhr.status);
	if(xhr.status == 200)
	{
		alert("Pedido generado exitosamente");
	}
}*/




