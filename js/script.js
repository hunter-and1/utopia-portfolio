$(document).ready(function() {

  $('.navbar-toggle').on('click touchstart',function() { $('body').toggleClass('sidebar-active').find('#body-sidebar-left').toggleClass('active'); });
  
  $('.sidebar-overlay').on('click touchstart',function() { $('.sidebar,.sidebar-container').removeClass('active'); $('body').removeClass('sidebar-active'); });
     
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
      $('#cs-header').addClass("sticky");
    }
    else{
      $('#cs-header').removeClass("sticky");
    }
  });

  $(window).load(function(){
    $('#cs-preloader').fadeOut('slow',function(){$(this).remove();});
  });

  $('#cs-cars .btn-inverted').click(function(){
    $('#cs-cars .btn-inverted').removeClass('active');
    $(this).addClass('active');
    $('#cs-cars .card-image img').attr('src','images/'+$(this).data('car'));
    $('#cs-cars .card-image .label-ribbon-right').text($(this).text());
  });

});

