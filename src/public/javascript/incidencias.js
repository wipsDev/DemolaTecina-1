 "user strict"

 function transform(string) {

    string = string.toLowerCase();

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function check(){

  if(localStorage.getItem("carga")){

    return localStorage.getItem("carga");
  }
  
  return "/Incidencias";

}


function comprobarPalabra(string){
  var list = ["Instalaciones","Baño","Habitaciones","Mantenimiento"];


  for(i in list){
    if (list[i] == string){
      return true
    }
  }

  return false;
}


 $(function () {

  var colores = ["red","black","green","brown","purple","sky","pink","grey","blue"];
  var carga = check();
  console.log(carga);



  var config = {
    apiKey: "AIzaSyATAgaW_Y5AV4Fi7a2JR6kueqV75U3uAHw",
    authDomain: "demola-453e3.firebaseapp.com",
    databaseURL: "https://demola-453e3.firebaseio.com",
    projectId: "demola-453e3",
    storageBucket: "demola-453e3.appspot.com",
    messagingSenderId: "688762689219"
  };

  firebase.initializeApp(config);




  firebase.database().ref(carga).once('value').then(function(snapshot) {
    var href;
    var nombre;
    var count = 0;

    console.log(snapshot.val());
    

    for(i in snapshot.val()){

      count++;
      nombre = transform(snapshot.val()[i].nombre);



      href = `<div   id="`+i+`" class="sub-box" tabindex="`+i+`" value="`+nombre+`">
      <div class="dentro `+ colores[i] +` ">
        <div class="text">
          <h1 class="nombre">`+ nombre +`</h1>
        </div>
  
      </div>
      </div>`


      $('.box').append(href);


      
      


    }

    if(count %3 != 0){
       href = `<div class="sub-box">
      <div class="dentro backgra ">
       
      </div>`


      $('.box').append(href);
    }



    var back = ` <div  id="`+count+`" class="sub-box salir" tabindex="`+count+`" value="`+count+`">
    <div class="dentro atras">
      <div class="text">
          <h1 class="nombre"> Atrás </h1>
      </div>

      </div>
    </div>
    </div>`
    $('.end').append(back);

    var salir = ` <div  id="`+(++count)+`" class="sub-box salir" tabindex="`+count+`" value="`+count+`">
    <div class="dentro salir">
      <div class="text">
          <h1 class="nombre"> Salir </h1>
        </div>
    </div>
    </div>`
    $('.end').append(salir);


    $('.sub-box[id="0"]').focus();
    
  })
});





 $("body").on("keydown", ".sub-box", function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == 13) { 

    if(comprobarPalabra($(this).attr('value'))){
      localStorage.setItem("carga", "SubCategorías/" + $(this).attr('value') );
    }
    else{
      localStorage.setItem("carga", $(this).attr('value'));
    }
    
    location.reload();
    
  }
});



