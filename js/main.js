$(document).ready(function () {


     //Invoco le funzioni per cambiare slide
     $('.next').click(function () { //Al click richiamo la funzione x aggiornare l'immagine visualizzando la successiva
          nextSlide();
     })



     function nextSlide() {
          if ($('.images img.active').hasClass('last')) {

               $('.images img.active').removeClass('active');
               $('.images img.first').addClass('active');

               //Pallini
               $('.slider-nav i.active').removeClass('active');
               $('.slider-nav i.first').addClass('active');

          } else {
               var imgAttiva = $('.images img.active');
               var prossimaImg = $('.images img.active').next();

               imgAttiva.removeClass('active');
               prossimaImg.addClass('active'); //

               var pallinoAttivo = $('.slider-nav i.active');
               var prossimaPallino = $('.slider-nav i.active').next();

               pallinoAttivo.removeClass('active');
               prossimaPallino.addClass('active');
          }
     }

})
