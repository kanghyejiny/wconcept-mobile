$(function () {
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  const body = document.querySelector('body');
  let scrollPosition = 0;

  //body fixed
  function enable() {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
  }

  function disable() {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }

  // page-intro
  const load = gsap.timeline({
    paused: true,
    onStart: function () {
      enable();
    }
  })
  load.addLabel('label')
    .set('.page-intro .thumb', {
      opacity: 1
    }, 'label')
    .fromTo('.page-intro .thumb', {
      xPercent: 100
    }, {
      xPercent: 0,
      duration: .6
    }, 'label')
    .set('.page-intro .logo', {
      opacity: 1,
      delay: .6
    }, 'label')
    .set('.page-intro .link-main', {
      opacity: 1,
      pointerEvents: 'auto',
      delay: 1
    }, 'label')
    .fromTo('.page-intro .link-main', {
      yPercent: 100
    }, {
      yPercent: 0,
      delay: 1,
      duration: .2
    }, 'label')
  load.play();

  $('.page-intro, .page-intro .link-main').click(function (e) {
    e.preventDefault();

    gsap.to('.page-intro', {
      opacity: 0,
      display: 'none',
      duration: .3,
      onComlete: function () {
        disable();
      }
    });
  });

  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    const stickyNav = $('.sticky-nav').offset().top;

    if (currentScroll >= stickyNav) {
      $('.sticky-nav').addClass('fixed');
    } else {
      $('.sticky-nav').removeClass('fixed');
    }
  });

  // gnb
  $('#gnb .link-gnb').click(function (e) {
    e.preventDefault();
    $('#gnb .link-gnb').removeClass('active');
    $(this).addClass('active');
  });


  // mdpick
  $('.sc-mdpick .btn-category').click(function (e) {
    e.preventDefault();
    $('.sc-mdpick .btn-category').removeClass('active');
    $(this).addClass('active');
  });

  $('.sc-mdpick .category-item').click(function () {
    idx = $(this).index();
    mdpickSwiper1.slideTo(idx);
    mdpickSwiper2.slideToLoop(idx);
  })

  // style
  $('.sc-style .btn-category').click(function (e) {
    e.preventDefault();
    const dataType = $(this).data('type');

    $('.sc-style .btn-category').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');
  });

  $('.sc-style .btn-more').click(function (e) {
    e.preventDefault();
  })

  // trend
  $('.sc-trend .btn-tag').click(function (e) {
    e.preventDefault();
    const dataType = $(this).data('type');
    $('.sc-trend .btn-tag').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.group-trend').removeClass('visible');
  });

  // special
  $('.sc-special .btn-category').click(function (e) {
    e.preventDefault();
    const dataType = $(this).data('type');

    $('.sc-special .btn-category').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');
  });

  // ranking
  let repeat = '';

  $('.sc-ranking .btn-tab').click(function (e) {
    e.preventDefault();
    const dataType = $(this).data('type');

    $(this).addClass('active').siblings().removeClass('active');
    $(dataType).addClass('visible').siblings('.tab-content').removeClass('visible');
  });
  
  let num = 0;
  
  rankRepeat = function () {
    repeat = setInterval(function () {
      $('#brand-content .swiper-slide-active .brand-item').removeClass("active");
      $('#brand-content .swiper-slide-active .brand-item').eq(num).addClass('active');
      num === 4 ? num = 0 : num++;
    }, 2000)
  };
  rankRepeat();

  rankRepeatInit = function () {
    clearInterval(repeat);
    num = 0;
    $('#brand-content .swiper-slide-active .brand-item').removeClass("active");
    $('#brand-content .swiper-slide-active .brand-item').eq(0).addClass('active');
    rankRepeat();
  };
  

  $('.sc-ranking .btn-brand').click(function () {
    const index = $(this).parent().index();
    clearInterval(repeat);
    $(this).parent().addClass('active').siblings().removeClass('active');
    num = index;
    repeat = setInterval(function () {
      $('#brand-content .swiper-slide-active .brand-item').removeClass("active");
      $('#brand-content .swiper-slide-active .brand-item').eq(num).addClass('active');
      num === 4 ? num = 0 : num++;
    }, 2000)
  });

  $('.sc-ranking .product-content .btn-category').click(function (e) {
    e.preventDefault();
    $('.sc-ranking .product-content .btn-category').removeClass('active');
    $(this).addClass('active');
  });

  $('.sc-ranking .brand-content .btn-category').click(function (e) {
    e.preventDefault();
    $('.sc-ranking .brand-content .btn-category').removeClass('active');
    $(this).addClass('active');
  });

  $('.sc-ranking .product-content .category-item').click(function () {
    idx = $(this).index();
    rankingSwiper1.slideTo(idx);
    rankingSwiper2.slideToLoop(idx);
  })

  $('.sc-ranking .brand-content .category-item').click(function () {
    idx = $(this).index();
    rankingSwiper4.slideTo(idx);
    rankingSwiper5.slideToLoop(idx);
  })

  // floating-nav
  let lastScroll = 0;
  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    if (currentScroll > lastScroll) {
      $('.floating-nav').addClass('invisible');
    } else {
      $('.floating-nav').removeClass('invisible');
    }
    lastScroll = currentScroll;

    if (currentScroll > 500) {
      $('.floating-nav .link-history').addClass('active');
      gsap.to('.floating-nav .btn-top', {
        display: 'block',
        duration: 0,
      })
    } else {
      $('.floating-nav .link-history').removeClass('active');
      gsap.to('.floating-nav .btn-top', {
        display: 'none',
        duration: 0,
      })
    }
  });

  // btn-top
  $('.floating-nav .btn-top').click(function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: '0'
    }, 500);
  });
});