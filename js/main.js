$(document).ready(function () {

     // var slideNumber = 1;
     // showSlides(slideNumber);
     // console.log(slideNumber);

     var clock = setInterval(nextSlide, 3000);
     stopTimer();
     //Invoco le funzioni per cambiare slide
     $('.next').click(function () { //Al click richiamo la funzione x aggiornare l'immagine visualizzando la successiva
          nextSlide();

     })
     $('.prev').click(function () { //Al click richiamo la funzione x aggiornare l'immagine visualizzando la successiva
          prevSlide();
     })

     if (!$('.fa-circle').hasClass('active')) {

     }



     // Metodo 1
     // $(".fa-circle").click(function() {
     //    var dots = $(".fa-circle");
     //    console.log(dots);
     //    for(var i = 0; i < dots.length; i++) {
     //      if ($(this).is(dots.eq(i))) { //se è dots(numero)
     //        $(".images img.active").removeClass("active");
     //        $(".images img").eq(i).addClass("active");
     //      }
     //    }
     //    $(".fa-circle.active").removeClass("active");
     //    $(this).addClass("active");
     //
     //  });
//       METODO 2
      $('.fa-circle').click(function(){
           $('.fa-circle').removeClass('active');
           $(this).addClass('active');
           var posizione = $(this).index();
           $('.images img.active').removeClass('active');
           $('.images img').eq(posizione).addClass('active');
      })

     var ciao = true;
     $('.images').click(function () {
          if (ciao == true){
               clearInterval(clock);
               ciao = false;
               console.log(ciao);
          } else {
               clock = setInterval(nextSlide, 3000);
               stopTimer();
               ciao = true;
               console.log(ciao);
          }


     })

     // var ciao = true;
     // $('.images').click(function () {
     //      clearInterval(clock);
     // })

     // MOUSEENTER

     //
     // $('.images').mouseenter(function () {
     //      clearInterval(clock);
     //      ciao = false;
     // })
     //
     // $('.images').mouseleave(function () {
     //      clock = setInterval(nextSlide, 3000);
     //      ciao = true;
     // })





     //
     // function showSlides(n) {
     //      var dots = document.getElementsByClassName("fa-circle");
     //      var slides = document.getElementsByClassName("slides");
     //      console.log(dots);
     //      console.log(slides);
     //
     //      if (n > slides.length) {
     //      slideNumber = 1
     //      }
     //      if (n < 1) {
     //      slideNumber = slides.length
     //      }
     // }


     function stopTimer(){
          var stop = setTimeout(function(){
               clearInterval(clock);
          }, 20000)
     }

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


          function prevSlide() {
               if ($('.images img.active').hasClass('first')) {

                    $('.images img.active').removeClass('active');
                    $('.images img.last').addClass('active');

                    //Pallini
                    $('.slider-nav i.active').removeClass('active');
                    $('.slider-nav i.last').addClass('active');

               } else {
                    var imgAttiva = $('.images img.active');
                    var precedenteImg = $('.images img.active').prev();

                    imgAttiva.removeClass('active');
                    precedenteImg.addClass('active'); //

                    var pallinoAttivo = $('.slider-nav i.active');
                    var prossimaPallino = $('.slider-nav i.active').prev();

                    pallinoAttivo.removeClass('active');
                    prossimaPallino.addClass('active');
               }
          }

          // GESTIONE TASTIERA

          $(document).keydown(function(event){
               if (ciao == true){
                    clearInterval(clock);
                    ciao = false;
                    console.log(ciao);
               } 
               switch (event.key) {
                    case 'ArrowLeft':
                    prevSlide();

                         break;
                    case 'ArrowRight':
                    nextSlide();

                         break;
                    default:
                    console.log('tasto errato');
                         break;

               }
          });


})
