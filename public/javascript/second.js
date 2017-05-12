 $(function () {
   var config = {
    apiKey: "AIzaSyATAgaW_Y5AV4Fi7a2JR6kueqV75U3uAHw",
    authDomain: "demola-453e3.firebaseapp.com",
    databaseURL: "https://demola-453e3.firebaseio.com",
    projectId: "demola-453e3",
    storageBucket: "demola-453e3.appspot.com",
    messagingSenderId: "688762689219"
  };
  firebase.initializeApp(config);






firebase.database().ref('/incidencias/Pisos').once('value').then(function(snapshot) {
  var count = 0;
  var href;

  console.log(snapshot.val());
  for(i in snapshot.val()){
    count++;

    href = `<div  id="`+i+`" class="sub-box" tabindex="`+i+`" value=`+snapshot.val()[i].nombre+`>
    <div class="dentro">
    <i class="fa fa-`+ snapshot.val()[i].icon +`" aria-hidden="true"></i>
    <h1>`+ snapshot.val()[i].nombre +`</h1>
    </div>
    </div>`

    $('.box').append(href);


  }
  var salir = ` <div  id="`+count+`" class="sub-box salir" tabindex="`+count+`" value="`+count+`">
  <div class="dentro">
  <i class="fa fa-sign-out" aria-hidden="true"></i>
  <h1>Salir</h1>
  </div>
  </div>`
  $('.box').append(salir);

  $('.sub-box[id="0"]').focus();
});

});



//volver al index si se pulsa en salir
$("body").on("keydown", ".salir", function(e){

  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;


  if (keyCode == 13) {  
    $(location).attr('href','index.html');
  }
})






//Sustituyendo el título 

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




