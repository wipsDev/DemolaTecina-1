
const url = "incidencias.html";

(function reset(){
    localStorage.removeItem("carga");
    localStorage.removeItem("atras");
    localStorage.removeItem("final");
    localStorage.removeItem("usuario");
})();


document.getElementById('usuario').onkeypress = function(e){


	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13'){

   		localStorage.setItem("usuario", $(this).val());
   		localStorage.setItem("atras", 'index.html');
   		localStorage.setItem("carga", 'Incidencias');
   		localStorage.setItem("habitacion", "2231");
   		$(location).attr('href', url);


	}




}