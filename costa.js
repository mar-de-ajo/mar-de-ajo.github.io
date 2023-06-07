
/*NAVEGADOR - BOTON MODO NOCHE*/

var navbar = document.getElementById("navbar");
var botones = document.getElementsByClassName("navbar-toggler");
if (navbar && navbar.style.backgroundColor === colorOriginalFondo) {
  navbar.style.backgroundColor = colorNuevoFondo;
  navbar.style.color = colorNuevoFuente;
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.backgroundColor = colorNuevoFondo;
  }
} else if (navbar) {
  navbar.style.backgroundColor = colorOriginalFondo;
  navbar.style.color = colorOriginalFuente;
  for (var i = 0; i < botones.length; i++) {
    botones[i].style.backgroundColor = colorOriginalFondo;
  }
} 


var body = document.body;
var colorOriginalFondo = body.style.backgroundColor;
var colorOriginalFuente = body.style.color;

function cambiarColor() {
  var colorNuevoFondo = "#222"; // Cambiar por el color de fondo oscuro deseado
  var colorNuevoFuente = "#fff"; // Cambiar por el color de fuente blanca deseado

  var divs = document.querySelectorAll("div"); // Seleccionar todos los elementos div en la página

  for (var i = 0; i < divs.length; i++) { // Iterar sobre todos los elementos div y cambiar sus estilos
    var div = divs[i];

    if (div.style.backgroundColor === colorOriginalFondo) {
      div.style.backgroundColor = colorNuevoFondo;
      div.style.color = colorNuevoFuente;
    } else {
      div.style.backgroundColor = colorOriginalFondo;
      div.style.color = colorOriginalFuente;
    }
    
    }

    // Cambiar los estilos del cuerpo (body)
    if (body.style.backgroundColor === colorOriginalFondo) {
        body.style.backgroundColor = colorNuevoFondo;
        body.style.color = colorNuevoFuente;
    }   else {
        body.style.backgroundColor = colorOriginalFondo;
         body.style.color = colorOriginalFuente;
    }
}



var boton = document.getElementById("cambiar-color");
boton.addEventListener("click", cambiarColor);


  document.getElementById('boton1').addEventListener('click', function(){
    document.getElementById("dato1").innerHTML = "<b><a href='tel:+5491138538495'><i class='bi bi-telephone'></i>+54-9-11-3853-8495</a></b>"
  });
  
  document.getElementById('boton2').addEventListener('click', function(){
    document.getElementById("dato2").innerHTML = "<b><a href='tel:+5491162550137'><i class='bi bi-telephone'></i>+54-9-11-6255-0137</a></b>"; 
  });
  
  document.getElementById('boton3').addEventListener('click', function(){
    document.getElementById("dato3").innerHTML = "<b><a href='tel:+5491155749814'><i class='bi bi-telephone'></i>+54-9-11-5574-9814</a></b>"; 
  });
  