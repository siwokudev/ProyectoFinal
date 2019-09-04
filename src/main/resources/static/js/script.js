let xhr = new XMLHttpRequest();
let total = 500.50;

window.onload = function()
{
	var btnAgregarArizona = document.querySelector("#btnAgregarArizona");
	btnAgregarArizona.onclick = enviarPetArizona;
	
	var btnAgregarRefresco = document.querySelector("#btnAgregarRefresco");
	btnAgregarRefresco.onclick = enviarPetRefresco;
	
	var btnAgregarCafe = document.querySelector("#btnAgregarCafe");
	btnAgregarCafe.onclick = enviarPetCafe;
	
	console.log()
}
//call get Arizona
function enviarPetArizona()
{
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcionArizona").value;
    var comentarios = document.querySelector("#comentariosArizona").value;
    
    console.log(opcion, comentarios);
    
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
		var displayNombre = "<p><h5>" + jsonReturned["nombre"] + ", " + jsonReturned["tipoBebida"] +"</h5></p>";
		var displayPrecio = "<p><h5>" + jsonReturned["precio"] + "</h5></p>";
		total += jsonReturned["precio"];
		
		document.querySelector("#miOrdenNombre").innerHTML += displayNombre;
		document.querySelector("#miOrdenPrecio").innerHTML += displayPrecio;
		document.querySelector("#miOrdenTotal").innerHTML = total;
	}
}