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
	xhr.onload = functionCallBack;
	xhr.send(null);
}
//call get refresco
function enviarPetRefresco()
{
    console.log("boton picado" + btnAgregar.value);

    var opcion = document.querySelector("#opcionRefresco").value;
    var comentarios = document.querySelector("#comentariosRefresco").value;
    
    console.log(opcion, comentarios);
    
    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBack;
	xhr.send(null);
}
//call get cafe
function enviarPetCafe()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionCafe").value;
    var comentarios = document.querySelector("#comentariosCafe").value;
    
    console.log(opcion, comentarios);
    
    

    var opcion = document.querySelector("#opcion").value;

    xhr.open("GET", "producto/nombre/" + opcion);
	xhr.onload = functionCallBack;
	xhr.send(null);
}

function functionCallBack()
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

function mandarComanda()
{
	/*let comanda = {"usuario" : "1",
			"total" : total,
			"comentarios" : listaComentarios,
			"direccionEntrega" : "usuario.compania",
			"estado" : 0,
			"productos": listaOpcion
	};*/
	let comanda = '{"usuario" : {"id" : 1}, "total" : '+total+ ', "comentarios" : "'+listaComentarios+'", "direccionEntrega" : "Generation", "estado" : 0, "productos": ['+listaOpcion+']	}';
	console.log(comanda);
	/*
	xhr.open("POST", "/comanda");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = pagoStatus;*/
	let comandaJson = JSON.parse(comanda);
	
	
	$.ajax({
		method : "POST",
		url : "/comanda",
		contentType : "application/json",
		data : JSON.stringify(comandaJson)
	}).done(function(msg) {
		alert("Comanda Actualizada ");
	}).fail(function(err) {
		console.log(err);
	});
	
	//xhr.send(comandaJson);
}

function pagoStatus()
{
	console.log("boton pagar" + xhr.status);
	if(xhr.status == 200)
	{
		alert("Pedido generado exitosamente");

	}
}




