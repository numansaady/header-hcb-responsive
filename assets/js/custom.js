jQuery(document).ready(function($) {

 
    // Back To Top 
   $('.top').click(function() {
       $("html, body").animate({
           scrollTop: 0
       }, 1000);
   });

   $('.top').hide();

   $(window).on("scroll", function() {
       var ourWindow = $(this).scrollTop();

       if (ourWindow < 500) {
           $('.top').fadeOut();
       } else {
           $('.top').fadeIn();
       }

       // Menu Fixed
       if (ourWindow > 100) {
           $('body').addClass('fixed');
       } else {
           $('body').removeClass('fixed');
       }
   });


   $('.navbar-nav li').click(function() {
       $(this).addClass('active').siblings().removeClass('active');
   });


   $('.navbar-nav a[href^="#"], .scroll-bottom a[href^="#"]').click(function(e) {
       e.preventDefault();

       var target = this.hash;

       $('html, body').animate({
           scrollTop: $(target).offset().top - 5
       }, 500);
   });


   // Parent Testimonial

     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      nextArrow: '.arrow-next',
      prevArrow: '.arrow-prev',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      infinite: true,
      autoplay: true,
    });



    // Owl-Carousel

    var carousel = $(".testi-slide-area");
    carousel.owlCarousel({
        loop:true,
        items: 3,
        margin:0,
        center:true,
        nav:true,
    });

    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        var total = $('.testi-slide-area .owl-stage .owl-item.active').length;

        $('.testi-slide-area .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.testi-slide-area .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total>1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }



});
