$(document).ready(function () {
  // Модальное окно
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });

  // Слайдер 
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

  // Инициализация WOW
  new WOW().init();

  // Кнопка "Наверх"
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

  // Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      }, 
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не больше 15 букв"
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
      userPhone: "required",
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не больше 15 букв"
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
        minlength: "Имя должно быть не короче двух букв",
        maxlength: "Имя должно быть не больше 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
      }
    }
  })

  // Маски для телефона
  $('[type=tel-control]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
  $('[type=tel-footer]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
  $('[type=tel-modal]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
  
  // Блокировка кнопок "Отправить" без выбранного чекбокса:
  // Надо решить вопрос с необходимостью вручную щелкать на уже активированный чекбокс (предустановка checked), т.к. без этого кнопка остаётся заблокированной. 
  // Для работы необходимо проставить submit кнопкам класс disabled="disabled"
  // $('.policy__checkbox').on('change', function(){
  //   if ($(this).is(':checked')){
  //     $('.form__submit').removeAttr('disabled');
  //   } else {
  //     $('.form__submit').attr('disabled', 'disabled'); 
  //   }
  // });
});
