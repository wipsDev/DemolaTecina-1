


// document.getElementById('usuario').onkeypress = function(e){
// 	if (!e) e = window.event;
// 	var keyCode = e.keyCode || e.which;
// 	if (keyCode == '13'){
// 		location.href = "cargar.html"
// 	}
// }


$("body").on("keydown", ".salir", function(e){

	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;


	if (keyCode == 13) {	
		$(location).attr('href','index.html');
	}
})




$( ".sub-box" ).keydown(function(e) {
	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == 13) {	
		var id = $(this).attr('id');
		console.log(id);
		$(location).attr('href','second.html?id='+id);
	}
})



$( document ).ready(function() {
	var id = getUrlParameter('id');
	$('.title > h1').text(id);

});




var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
