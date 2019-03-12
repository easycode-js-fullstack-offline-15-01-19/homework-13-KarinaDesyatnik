// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------
;(function ($) {   
    $('a').on('click', function(e){
      e.preventDefault();
    });    
    $('.dropdown-menu li').hover(function () {
      $('ul',this).slideDown();
      $('li', this).css('background', '#9a59b5');
      $(this).css('background', '#9a59b5');
    }, function () { 
      $('ul',this).slideUp(); 
      $(this).css('background', 'transparent');  
    });
  }(jQuery));