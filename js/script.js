$(document).ready(function(){
    
    
    
    
//CHANGE_BG_HOME #################################################################
    
  $(window).bind('scroll', function() {
    var distance = 180;
    if ($(window).scrollTop() > distance) {
      $('.home').addClass('scrolled');
    }
    else {
      $('.home').removeClass('scrolled');
    }
  });
    
    
//CHANGE_COLOR HEADER ##############################################################
    
    $(window).bind('scroll', function() {
        var distance = 180;
      
        if ($(window).scrollTop() > distance) {
            $('header').addClass('colorHeader');
        }
          else {
      $('header').removeClass('colorHeader');
    }
    });
    
    
    
//WORK_THUMBNAILS #################################################################
    
    $(".main").mouseover(function(){
        var posTop = Math.random(0,1);
        
        $(".image").show();
        $(".image").css('margin-top', posTop);
        $(".image").css('margin-left', posTop);
    });
    
    $(".main").mouseout(function(){
        $(".image").hide();
    });   
});


//MODAL_WORK ######################################################################

 $('.main').on('click', function() {
    console.log('CLICK');

              
        $('.modal').addClass('modal-isOpen');
     
    });

    $('.modal-close').on('click', function() {
        $('.modal').removeClass('modal-isOpen')
    });
    


