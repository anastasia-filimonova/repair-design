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

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true} 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  })

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userPhone: {
        required: true,
        minlength: 2
      } 
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Заполните поле"
    },
  })

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userPhone: "required",
      
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      },
      userPhone: {
        required: "Заполните поле",
      }
    }
  })
      // маска для телефона
      $('[type=tel-control]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
      $('[type=tel-footer]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
      $('[type=tel-modal]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
      
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