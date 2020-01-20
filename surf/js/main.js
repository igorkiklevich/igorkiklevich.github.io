$(function(){

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider__dots',
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/left-arrow.svg" alt="">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/right-arrow.svg" alt="">'
  });

  $('.slider__dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  });

  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/left-arrow.svg" alt="">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/right-arrow.svg" alt="">',
    asNavFor: '.surf_map, .surf__right-text-dots',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.surf_map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.surf__slider',
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1041,
        settings:{slidesToShow: 3}
      },
      {
        breakpoint: 921,
        settings:{slidesToShow: 2}
      },
      {
        breakpoint: 661,
        settings:{slidesToShow: 1}
      }
    ]
  });
  $('.surf__right-text-dots').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.surf__slider',
    arrows: false,
    focusOnSelect: true,
    fade: true
  });

  $('.main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/left-arrow.svg" alt="">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/right-arrow.svg" alt="">',
    fade: true,
    asNavFor: '.main__dots'
  });

  $('.main__dots').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main__slider',
    arrows: false,
    fade: true,
    focusOnSelect: true
  });

  $('.shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/left-arrow.svg" alt="">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/right-arrow.svg" alt="">'
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
  $('.quantity-button').on('click', function(){
    let summ = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() -1) * $('.sum').data('guests');
  $('.sum').html('$' + summ);
  });

  let summ = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() -1) * $('.sum').data('guests');
  $('.sum').html('$' + summ);
  
  $('.tovar-left-circle').on('click', function(){
    $(this).toggleClass('active')
  });

  // document.body.onload = function(){
  //   setTimeout(function() {
  //     var preloader = document.getElementById('preloader');
  //     if( !preloader.classList.contains('done') )
  //     {
  //       preloader.classList.add('done');
  //     }
  //   }, 1000)
  // }

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

  AOS.init({
    once: true
});

$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('active');
});
});

        