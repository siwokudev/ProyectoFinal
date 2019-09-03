let xhr = new XMLHttpRequest();

window.onload = function()
{
	//alert("funcionando");
	var btnAgregar = document.querySelector("#btnAgregar");
	btnAgregar.onclick = enviarPet;
}

function enviarPet()
{
	//alert("tipo bebida request");
    console.log("boton picado" + btnAgregar.value);
    var opcion = document.querySelector("#opcion").value;
    xhr.open("GET", "producto/nombre/"+opcion);
	xhr.onload = functionCallBack;
	xhr.send(null);
}

function functionCallBack()
{
    console.log(xhr.status);
    console.log(opcion, comentarios);
	if(xhr.status == 200)
	{
		document.querySelector("#miOrdenResultado").innerHTML = xhr.responseText;
	}
}