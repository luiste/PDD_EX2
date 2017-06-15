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
        var posTop = Math.random() * 400;
        console.log(posTop)
        
        $(".image").show();
        $(".image").css('top', posTop + 'px');
        $(".image").css('margin-left', posTop + 'px');
    });
    
    $(".main").mouseout(function(){
        $(".image").hide();
    });   
});





//MODAL_WORK ######################################################################

$('.thumb').on('click', function() {
    var marginLeft = -0.3;
    console.log('CLICK');
 
        $('.modal').addClass('modal-isOpen');
        $('body').css({
            'overflow-y': 'hidden'
        });
        $("header").css('margin-left', marginLeft + 'em');
});

    $('.modal-close').on('click', function() {
        $('.modal').removeClass('modal-isOpen');
        $('body').css({
            'overflow-y' : 'auto'
        });
    });






//MODAL_WORK ######################################################################

//$('.thumb').on('click', function() {
//    console.log('CLICK');
// 
//        $('.modal').addClass('modal-isOpen');
//        $('body').css({
//            'overflow-y': 'hidden'
//        });
//    
//});
//
//    $('.modal-close').on('click', function() {
//        $('.modal').removeClass('modal-isOpen');
//        $('body').css({
//            'overflow-y' : 'auto'
//        });
//    });








console.log("HELLO")    

