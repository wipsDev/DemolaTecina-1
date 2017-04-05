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
    var count = 0;
    var href;

    for(i in snapshot.val()){


      href = `<a href="http://unicorn-ui.com/" class="button button-royal button-giant">`+ snapshot.val()[i].nombre +`</a>`

      $('.subwrapper').append(href);

    }

  });

});
  /*


  <div class="subwrapper">

      <a href="http://unicorn-ui.com/" class="button button-royal button-giant">Go</a>
      <a href="http://unicorn-ui.com/" class="button button-royal button-giant">Go</a>
      <a href="http://unicorn-ui.com/" class="button button-royal button-giant">Go</a>

  </div>



  */