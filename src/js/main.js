$(document).ready(function () {
  // Модальное окно
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      modalSuccess = $('.modal-success'),
      closeSuccess = $('.modal-success__button');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  })
  closeBtn.on('click', function () {
    modal.toggleClass('modal-success--visible')
  }) 
  closeSuccess.on('click', function () {
    $(modalSuccess).removeClass('modal-success--visible');
})  

  $(document).keydown(function (event) {
    if (event.keyCode === 27) {
        $(modal).removeClass('modal--visible');
        $(modalSuccess).removeClass('modal-success--visible')
    }
  });

  $(document).click(function (event) {
      if ($(event.target).is(modal) || $(event.target).is(modalSuccess)) {
        $(modal).removeClass('modal--visible');
        $(modalSuccess).removeClass('modal-success--visible');
      }
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

  next.css('left', prev.width() + 10 + bullets.width() + 10);  
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
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
  });

  // Валидация форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        }, 
        userPhone: {
          required: true,
          minlength: 18
        }, 
        userQuestion: "required",
        policyCheckbox: "required",
        // правило-объект
        userEmail: {
          required: true,
          email: true
        }
      }, // сообщения
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя должно быть не короче 2 букв",
          maxlength: "Имя должно быть не длиннее 15 букв"
        },
        userPhone: {        
          required: "Заполните поле",
          minlength: "Введите корректный номер телефона"
        },
        userQuestion: "Заполните поле",
        policyCheckbox: "Согласитесь с обработкой данных",
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный email в формате name@domain.com"
        }
      },
      errorPlacement: function (error, element) {
        if (element.attr("id") == "control-policy-checkbox") {
          error.insertAfter(".control__policy-label");
        }
        else if (element.attr("id") == "footer-policy-checkbox") {
          error.insertAfter(".footer__policy-label");
        }
        else if (element.attr("id") == "modal-policy-checkbox") {
              error.insertAfter(".modal__policy-label");
        } else {
          error.insertAfter(element);
        }  
      },

      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $(form)[0].reset();
            $(modal).removeClass('modal--visible');
            $(modalSuccess).addClass('modal-success--visible')
          }
        });
      }
    })
  });
        
  // Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

});