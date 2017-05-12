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


  firebase.database().ref('/incidencias').once('value').then(function(snapshot) {


    console.log(snapshot.val());
    

    for(i in snapshot.val()){
      if(i != "Pisos"){
        href = `<div   id="`+i+`" class="sub-box" tabindex="`+i+`" value="`+snapshot.val()[i].nombre+`">
        <div class="dentro">
        <i class="fa fa-`+snapshot.val()[i].icon+`" aria-hidden="true"></i>
        <h1>`+snapshot.val()[i].nombre+`</h1>
        </div>
        </div>`

        $('.box').append(href);
      }

    }
    $('.sub-box[id="0"]').focus();
    
  })
});





$("body").on("keydown", ".sub-box", function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == 13) {  
    $(location).attr('href','second.html?id='+ $(this).attr('value'));
  }
});



