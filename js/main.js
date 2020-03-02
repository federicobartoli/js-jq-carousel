$(document).ready(function () {

     // var slideNumber = 1;
     // showSlides(slideNumber);
     // console.log(slideNumber);

     var clock = setInterval(nextSlide, 5000);

     //Invoco le funzioni per cambiare slide
     $('.next').click(function () { //Al click richiamo la funzione x aggiornare l'immagine visualizzando la successiva
          nextSlide();

     })
     $('.prev').click(function () { //Al click richiamo la funzione x aggiornare l'immagine visualizzando la successiva
          prevSlide();
     })

     if (!$('.fa-circle').hasClass('active')) {

     }


     $(".fa-circle").click(function() {
        var dots = $(".fa-circle");
        for(var i = 0; i < dots.length; i++) {
          if ($(this).is(dots.eq(i))) {
            $(".images img.active").removeClass("active");
            $(".images img").eq(i).addClass("active");
          }
        }
        $(".fa-circle.active").removeClass("active");
        $(this).addClass("active");

      });

     $('.images').click(function () {

               clearInterval(clock);

     })



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


})
