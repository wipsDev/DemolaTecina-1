
        // for(i in snapshot.val()){




        // }



document.getElementById('usuario').onkeypress = function(e){
	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13'){
		console.log("hola");
		location.href = "cargar.html"
	}
}