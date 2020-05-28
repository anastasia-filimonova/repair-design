  // открывашка:
$(document).ready(function($) {
  // Модальные окна (открытие/закрытие по кнопкам, закрытие по нажатию на Esc и пустое место)
	$('.modalOpenBtn').click(function() {
		$('.modal').toggleClass('hidden');
		return false;
	});	
  
  $('.modal__close').click(function() {
    $(this).parents('.modal').addClass('hidden');
    return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').addClass('hidden');
		}
	});
	
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			$(this).addClass('hidden');					
		}
  });
  
  $('.success-dialog__button').click(function() {
		$(this).parents('.modal-success').addClass('hidden');
		return false;
  });	
  
  $('.modal-success').click(function(e) {
		if ($(e.target).closest('.modal-success__dialog').length == 0) {
			$(this).addClass('hidden');					
		}
  });
  
  $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal-success').addClass('hidden');
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

  // Кнопка "Вверх"
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
        userEmail: {
          required: true,
          email: true
        }
      }, 
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
            $('.modal').addClass('hidden');
            $('#modalSuccess').toggleClass('hidden');
            yaCounter64436440.reachGoal('request');
          }
        });
      }
    })
  });
        
  // Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');
  // закрывашка:
});
