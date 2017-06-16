var btn = document.getElementById("boton");

btn.addEventListener("click", function(e){
	e.preventDefault();
	var correo = document.getElementById("email").value;
	var contrasena = document.getElementById("pwd").value;

	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo))){
			var span = document.createElement("span");
			var ident = document.getElementById("email");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar su correo");
			span.appendChild(contenido);
		return span;
	}
	if(contrasena.length < 6 || contrasena == "" || contrasena == "123456"){
			var span = document.createElement("span");
			var ident = document.getElementById("pwd");
			var padre = ident.parentNode;
			padre.appendChild(span);

			var contenido = document.createTextNode("Debe ingresar una contraseña");
			span.appendChild(contenido);
		return span;
	}

})

function drag(ev){
	ev.dataTransfer.setData('text', ev.target.id);
}

function finalDrop(ev){
	ev.preventDefault();
}

function drop(ev){
	ev.preventDefault();

	var id = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(id));
}
