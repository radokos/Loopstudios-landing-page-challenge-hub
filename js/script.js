(function($) {

 var hamburger = $('.hamburger');

hamburger.on('click', function(event){
     event.preventDefault();
     $('.menu').toggle();
  
     function backgroundChange() {
          if($('.menu li').height() > 0)
                     $('nav').css({background:'black'});else{$('nav').css({background:'none'})};
          };
          backgroundChange();            
           
});

})(jQuery);