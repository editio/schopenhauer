// Editado live en la pagina en Hostinger

// Botones para funciones que usan el jquery instalado en Drupal para Oraculo manual.
// Uso un modulo de drupal, js_injector para meter estas funciones.
// Algunas clases, id, etc. se encuentran en el xslt tei-marginalia-lb y se combinan con bootstrap


//// 0. Dragable para el "reading options". Tiene que ir antes que el #desplegable

//// Lleva un #draggable {position:fixed;} en el CSS (tei-margin. Funciona. Solo que no puede ir mas allá de su parent, que es el documento del page.



jQuery(document).ready(function ($) {

// nuevo evento:
  $( "#desplazar" ).draggable({
        containment: "window", scroll: false 
        });
// fin nuevo evento
});




//// 1. Poner y quitar el número de aforismo ////
jQuery(document).ready(function ($) {
    
    //Pulsando en #numeros
    $("#numeros").click(function () {
        
        // nuevo evento: poner nr
        $(".numero").toggle();
        // fin nuevo evento
    });
});

//// 2. Lectura sin saltos de linea ////

jQuery(document).ready(function ($) {
    
    $("#lectura").click(function () {
        
        // nuevo evento: quitar los br mejora la velocidad y funciona con chrome. 
        // con var show = true; en el html, a;adie un clase a todos los br. vide tn el css
         if (show) {
            $('.g').removeClass('g').addClass('gHide');
            show = false;
        } else {
            $('.gHide').removeClass('gHide').addClass('g');

            show = true;
        }
        // fin nuevo evento
        
        
        
        // nuevo evento: quitar hyphen
        $(".hyphen").toggle();
        // fin nuevo evento
        
        // nuevo evento: pone hyphen-vertical. Por defecto, non display
        $(".hyphen-vertical").toggle();
        // fin nuevo evento
        
        // nuevo evento: intercambiar las classes de .marginalia-simple etc.
        $(".marginalia-simple, .marginalia-simple-no-lb").toggleClass("marginalia-simple marginalia-simple-no-lb");
        $(".marginalia-doble, .marginalia-doble-no-lb").toggleClass("marginalia-doble marginalia-doble-no-lb");
        $(".marginalia-triple, .marginalia-triple-no-lb").toggleClass("marginalia-triple marginalia-triple-no-lb");
        
        $(".marginalia-simple-tinta, .marginalia-simple-tinta-no-lb").toggleClass("marginalia-simple-tinta marginalia-simple-tinta-no-lb");
        $(".marginalia-doble-tinta, .marginalia-doble-tinta-no-lb").toggleClass("marginalia-doble-tinta marginalia-doble-tinta-no-lb");
        $(".marginalia-triple-tinta, .marginalia-triple-tinta-no-lb").toggleClass("marginalia-triple-tinta marginalia-triple-tinta-no-lb");
        // fin nuevo evento
    });
});

//// 3.1 Popover para las notas del editor. El codigo de xslt está en el elemento <note> del xslt ////

jQuery(document).ready(function ($) {

// nuevo evento:
  $(".boton").click(function() {
    $(this).next(".nota-contenido").slideToggle();
  });
// fin nuevo evento
});


//// 4.1 Legenda. Hecho as'i para que funcione con un jquery bajo 1.5////


jQuery(document).ready(function ($) {

// nuevo evento:
  $("#collapse").click(function() {
    $("#legend").slideToggle();
  });
// fin nuevo evento
});

//// Desplegable. Hecho as'i para que funcione con un jquery bajo 1.5////


jQuery(document).ready(function ($) {

// nuevo evento:
  $("#desplegable").click(function() {
    $(".dropdown-menu").slideToggle();
  });
// fin nuevo evento
});


//// 4. Modifica el formato de las maximas (cursiva) ////

jQuery(document).ready(function ($) {
    $("#maximas").click(function () {
        
        // nuevo evento: pone y quita el formato a las maximas
        $(".segmento, .segmento-format").toggleClass("segmento segmento-format");
        // fin nuevo evento
    });
});





/*Perfecto, puedo meter las notas en un div!*/
jQuery(document).ready(function ($) {
    
    $('.boton').popover({
        //placement: 'top',
        //container: 'hola',   // se puede poner aqu'i o como atributo en el html
        //html: true,
        content: function () {
            return $(this).next('.nota-contenido').html();
        }
    });
     
});

/*//// 5. Reading options. Permite meter dentro los selectores (listas) de aforismos 
de manera que solo se cierra al ciclar en el boton ////
*/

jQuery(document).ready(function ($) {
    
    $('.btn-group').on({
        "shown.bs.dropdown": function () {
            this.closable = true;
        },
        "click": function (e) {
            var target = $(e.target);
            if (target.hasClass("abierto"))
            this.closable = true; else
            this.closable = false;
        },
        "hide.bs.dropdown": function () {
            return this.closable;
        }
    });
});








//Otros ejemplos de js: incluir atributos en el css

/*$('.marginalia-simple').css("display", "none");*/


//Otros ejemplos de js: añade antes o depues cosas al elemento seleccionado

/*$( ".marginalia-simple-no-lb" ).prepend( "<span class='flechas'>►</span>" );
$( ".marginalia-simple-no-lb" ).append( "<span class='flechas'>◄</span>" );*/

// Otros ejemplos de js: Cambia el nombre de la etiqueta. El codigo es el mimo que el anterior

/*jQuery(document).ready(function($){
$("#button1").click(function(){
if ($(this).text() == "Modernizado")
{
$(this).text("Original");
}
else
{
$(this).text("Modernizado");
};
// nuevo evento: quitar los br
$("br").toggle();
// fin nuevo evento
 
// nuevo evento: poner nr
$(".numero").toggle();
// fin nuevo evento
});
});*/