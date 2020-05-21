$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
});

$(document).ready(function(){
 
  $(window).scroll(function(){
     if ($(this).scrollTop() > 800) { 
     $('.scrollup').fadeIn();
  } else {
     $('.scrollup').fadeOut();
  }
});
 
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 300);
  return false;
 });
 
});