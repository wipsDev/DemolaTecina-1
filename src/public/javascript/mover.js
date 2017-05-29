


//Calculando el max y min de elementos en el DOM

function calculateMax(_MAX){
	$('.sub-box').each(function(i, obj) {
		var id = parseInt($(this).attr('id'));
		if(id > _MAX){
			_MAX = id;
		}
	});	
	return _MAX;
}


function calculateMin(_MIN){
	$('.sub-box').each(function(i, obj) {
		var id = parseInt($(this).attr('id'));

		if(id  < _MIN){
			_MIN = id;
		}

		return _MIN;
	});	
}

//lógica del movimiento de las flechas

$('html').keydown(function(e){
	const filas = 3;
	var _MAX = -20;
	var _MIN = 99999;

	_MAX = calculateMax(_MAX);
	_MIN = calculateMin(_MIN);

	var siguiente;
		// izq 37 arriba 38 derecha 39 abajo 40

		if (e.which == 37) {	

			var $focused = $(':focus');
			var valor = $focused.attr('id');
			console.log("izq " + valor + " se resta uno al valor y va a " + _MAX);

			if(valor > 0){
				$('.sub-box[id='+(valor-1)+']').focus();
			}
			else{
				$('.sub-box[id='+_MAX+']').focus();
			}
		}

		if (e.which == 38) {	

			var $focused = $(':focus');
			var valor = $focused.attr('id');
			console.log("arriba " + valor);

			if(valor > 1){
				$('.sub-box[id='+(valor-filas)+']').focus();
			}
			if(valor == 1){
				$('.sub-box[id='+_MAX+']').focus();
			}
			else if(valor == 0){
				$('.sub-box[id='+(_MAX-1)+']').focus();
			}
		}



		if (e.which == 39) {	

			var $focused = $(':focus');
			var valor = $focused.attr('id');
			console.log("derecha " + valor);
			var siguiente = parseInt(valor)+1;
			if(valor < _MAX){
				$('.sub-box[id='+siguiente+']').focus();
			}
			else{
				$('.sub-box[id=0]').focus();
			}
		}



		if (e.which == 40) {	
			var $focused = $(':focus');
			var valor = $focused.attr('id');
			console.log("abajo " + valor);
			if(valor < _MAX-1){
				siguiente = parseInt(valor)+filas;
				$('.sub-box[id='+siguiente+']').focus();
			}
			else if(valor == _MAX-1){
				$('.sub-box[id=0]').focus();
			}
			else if(valor == _MAX){
				$('.sub-box[id=1]').focus();
			}

		}


	});





