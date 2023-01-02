// scroll effect in menu custom coding

$(window).scroll(function(){

  if($(window).scrollTop() > 300){
    
    $(".navbar").addClass('navbarColor');

  } else {
    $(".navbar").removeClass('navbarColor');
  }

});

// scroll effect in menu custom coding




var owl = $('.owl-carousel');
      owl.owlCarousel({
          loop:true,
          nav:true,
          margin:10,
          rtl: true,
          autoplay:true,
          autoplayTimeout:3000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },            
              960:{
                  items:5
              },
              1200:{
                  items:6
              }
          }
      });
      owl.on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY>0) {
              owl.trigger('next.owl');
          } else {
              owl.trigger('prev.owl');
          }
          e.preventDefault();
      });









        $(document).ready(function(){
          $('.test').slick({
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]


          });
        });









        var typed = new Typed('.text', {
        strings: [
          'Masud Rana Sobuj',
          'a web designer',
          'a web developer',
          'a full time freelancer'
        ],
        stringsElement: null,
        typeSpeed: 50,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: true,
        shuffle: false,
        backDelay: 700,
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '',
        autoInsertCss: true,
        attr: null,
        bindInputFocusEvents: false,
        contentType: 'html'
});




         AOS.init();




         // **********isotope**********
         
         var $grid = $('.grid').isotope({
          // options
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

        // **********isotope**********