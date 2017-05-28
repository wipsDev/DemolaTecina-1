
const url = "incidencias.html";


firebase.initializeApp(config);


document.getElementById('usuario').onkeypress = function(e){


	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13'){

   		localStorage.setItem("usuario", $(this).val());
   		$(location).attr('href', url);


	}




}