 "user strict"



 function reset(){
  localStorage.removeItem("carga");
  localStorage.removeItem("atras");
  localStorage.removeItem("final");
  localStorage.removeItem("usuario");
}



// Variable=[NHabitacion,NEmpleado,Incidencia,Hora,Dia,"False"]
function writeUserData(NHabitacion, NEmpleado, Incidencia, Hora,Date) {
  firebase.database().ref('incidencias/' + NHabitacion + '/' + NEmpleado + '/' + Incidencia).set({

    NHabitacion: NHabitacion,
    NEmpleado: NEmpleado,
    Incidencia : Incidencia,
    Hora: Hora,
    Date: Date,
    Prestige: "False"

  });
   firebase.database().ref('Almacen/').push({

    NHabitacion: NHabitacion,
    NEmpleado: NEmpleado,
    Incidencia : Incidencia,
    Hora: Hora,
    Date: Date,
    Prestige: "False"

  });
 
}

function spaces(count){
 var times = count%3;

 if(times == 1){
  href = `<div class="sub-box">
  <div class="dentro backgra ">
  </div>`
  $('.box').append(href);

  href = `<div class="sub-box">
  <div class="dentro backgra ">
  </div>`
  $('.box').append(href);
  count = count+2;
}
else if(times == 2){
  href = `<div class="sub-box">
  <div class="dentro backgra ">
  </div>`
  $('.box').append(href);
  count++;

}
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

function comprobarFuncion(string){

  if(string == "Atrás"){
    if(localStorage.getItem("carga") == "Incidencias"){
      $(location).attr('href', "index.html");
    }
    else if(localStorage.getItem("final")){
      localStorage.removeItem("final")
      localStorage.setItem("carga",  localStorage.getItem("atras"));
      localStorage.setItem("atras",  "Incidencias");
      location.reload();
    }
    else{
      localStorage.setItem("carga",  localStorage.getItem("atras"));
      location.reload();
    }
    

  }

  else if(string == "Salir"){
    reset();
    $(location).attr('href', "index.html");
  }

  else{
    return true;
  }

  

}


$(function () {

  var colores = ["red","black","green","brown","purple","sky","pink","grey","blue","chicle","hardblue","hardpurple"];
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

    

    for(i in snapshot.val()){

      count++;
      nombre = snapshot.val()[i].nombre;



      href = `<div   id="`+i+`" class="sub-box" tabindex="`+i+`" value="`+nombre+`">
      <div class="dentro `+ colores[i] +` ">
      <div class="text">
      <h1 class="nombre">`+ nombre +`</h1>
      </div>

      </div>
      </div>`


      $('.box').append(href);


      
      


    }

    if(count > 9){

      $('.sub-box').addClass("overload");
      spaces(count);

    }
    else if(count > 3){

      spaces(count);

    }


    else{
      $('.box').addClass('center');
    }
    


    var back = ` <div  id="`+count+`" class="sub-box salir" tabindex="`+count+`" value="Atrás">
    <div class="dentro atras">
    <div class="text">
    <h1 class="nombre"> Atrás </h1>
    </div>

    </div>
    </div>
    </div>`
    $('.end').append(back);

    var salir = ` <div  id="`+(++count)+`" class="sub-box salir" tabindex="`+count+`" value="Salir">
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

    if(comprobarFuncion($(this).attr('value'))){

      if(localStorage.getItem("final")){

        // Variable=[NHabitacion,NEmpleado,Incidencia,Hora,Dia,"False"]
        var habitacion = localStorage.getItem("habitacion");
        var usuario = localStorage.getItem("usuario");
        var incidencia = $(this).attr('value');


        var fecha= new Date()
        var time  = fecha.getHours() + ":" + fecha.getMinutes();
        var date =  fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" +  fecha.getFullYear();



        writeUserData(habitacion,usuario,incidencia,time,date);

        


        swal({
        }).then(
        function() { 
          swal({
           title: 'Enviado',
           text: 'Habitación: ' + habitacion + ' Usuario: ' + usuario + ' Incidencia: ' + incidencia + ' Hora: ' + time + ' Fecha: ' + date + ')',
           type: 'success',
           showCloseButton: false,
           confirmButtonText: '¡Bien!',
           confirmButtonColor: '#1db75a',
           showCancelButton: false
         }).then(
         function(){
          reset();
          $(location).attr('href', "index.html");
        });
       });





      }
      else{

      
          localStorage.setItem("atras",localStorage.getItem("carga"));

          if(comprobarPalabra($(this).attr('value'))){
            localStorage.setItem("carga", "SubCategorías/" + $(this).attr('value'));
          }
          else{
            localStorage.setItem("final",true);
            localStorage.setItem("carga", $(this).attr('value'));
          }


          location.reload();
      }


    }   
  }
});



