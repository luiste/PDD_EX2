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
            $('header').addClass('changeHeader');
        }
          else {
      $('header').removeClass('changeHeader');
    }
    });
    
    
    
//WORK_THUMBNAILS #################################################################
    
    $(".main").mouseover(function(){
        var posTop = Math.random() * 100;
        console.log(posTop)
        
        $(".image").show();
        $(".image").css('top', posTop + 'px');
        $(".image").css('margin-left', posTopm + 'px');
    });
    
    $(".main").mouseout(function(){
        $(".image").hide();
    });   
});


//MODAL_WORK ######################################################################

 $('.thumb').on('click', function() {
    console.log('CLICK');

              
        $('.modal').addClass('modal-isOpen');
//     add class body
     
    });

    $('.modal-close').on('click', function() {
        $('.modal').removeClass('modal-isOpen')
    });



console.log("HELLO")    

