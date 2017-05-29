
const url = "incidencias.html";




document.getElementById('usuario').onkeypress = function(e){


	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13'){

   		localStorage.setItem("usuario", $(this).val());
   		localStorage.setItem("atras", 'index.html');
   		$(location).attr('href', url);


	}




}