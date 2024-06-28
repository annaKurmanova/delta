jQuery(document).ready(function($) {
    $(".slider__item").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".slider__prev"),
      nextArrow: $(".slider__next"),   
      customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
    }, 
    }); 
     
});