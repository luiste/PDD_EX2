$(document).ready(function(){
    
    
    
    
//CHANGE_BG_HOME #######################    
  $(window).bind('scroll', function() {
    var distance = 180;
    if ($(window).scrollTop() > distance) {
      $('.home').addClass('scrolled');
    }
    else {
      $('.home').removeClass('scrolled');
    }
  });
    
    
    
    
    
    
//WORK_THUMBNAILS #######################
    
    $(".main").mouseover(function(){
        $(".image").show();
    });
    
    $(".main").mouseout(function(){
        $(".image").hide();
    });   
});