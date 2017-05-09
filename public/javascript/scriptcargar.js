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

  var inci = $('h1').text();
  console.log("inci vale " + inci);

  firebase.database().ref('/incidencias/Pisos').once('value').then(function(snapshot) {
    var count = 0;
    var href;

    console.log(snapshot.val());
    for(i in snapshot.val()){


      href = `<div  id="`+ snapshot.val()[i].nombre +`" class="sub-box" tabindex="1">
      <div class="dentro">
      <i class="fa fa-`+ snapshot.val()[i].icon +`" aria-hidden="true"></i>
      <h1>`+ snapshot.val()[i].nombre +`</h1>
      </div>
      </div>`

      $('.box').append(href);




    }

    var salir = ` <div   class="sub-box salir" tabindex="3">
    <div class="dentro">
    <i class="fa fa-sign-out" aria-hidden="true"></i>
    <h1>Salir</h1>
    </div>
    </div>`
    $('.box').append(salir);
  });

});

/*
<div  id="+Urgentes" class="sub-box" tabindex="1">
        <div class="dentro">
          <i class="fa fa-level-up" aria-hidden="true"></i>
          <h1>+ Urgentes</h1>
        </div>
      </div>
      */



  /*


  <div class="subwrapper">

      <a href="http://unicorn-ui.com/" class="button button-royal button-giant">Go</a>
      <a href="http://unicorn-ui.com/" class="button button-royal button-giant">Go</a>
      <a href="http://unicorn-ui.com/" class="button button-royal button-giant">Go</a>

  </div>



  */