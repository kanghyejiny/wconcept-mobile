const gnbSwiper = new Swiper('#gnb .swiper', {
  slidesPerView: 'auto'
});

const visualSwiper = new Swiper('.sc-visual .swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.sc-visual .swiper-pagination',
    type: "fraction",
  },
});

const saleSwiper = new Swiper('.sc-sale .swiper', {
  slidesPerView: 'auto',
});

const showroomSwiper = new Swiper('.sc-showroom .swiper', {
  slidesPerView: 'auto',
});
const exclusiveSwiper = new Swiper('.sc-exclusive .swiper', {
  spaceBetween: 8,
});
const stylepickSwiper = new Swiper('.sc-stylepick .swiper', {
  spaceBetween: 8,
});
const issueSwiper = new Swiper('.sc-issue .swiper', {
  spaceBetween: 8,
});
const beautypickSwiper = new Swiper('.sc-beautypick .swiper', {
  spaceBetween: 8,
});
const updateSwiper = new Swiper('.sc-update .swiper', {
  slidesPerView: 'auto',
});
const specialSwiper = new Swiper('.sc-special .swiper', {
  slidesPerView: 'auto',
  observer: true,
  observeParents: true,
});
const themeSwiper1 = new Swiper('.sc-theme .swiper1', {
  slidesPerView: 'auto',
});
const themeSwiper2 = new Swiper('.sc-theme .swiper2', {
  slidesPerView: 'auto',
});
const themeSwiper3 = new Swiper('.sc-theme .swiper3', {
  slidesPerView: 'auto',
});
const themeSwiper4 = new Swiper('.sc-theme .swiper4', {
  slidesPerView: 'auto',
});
const themeSwiper5 = new Swiper('.sc-theme .swiper5', {
  slidesPerView: 'auto',
});
const themeSwiper6 = new Swiper('.sc-theme .swiper6', {
  slidesPerView: 'auto',
});
const themeSwiper7 = new Swiper('.sc-theme .swiper7', {
  slidesPerView: 'auto',
});
const themeSwiper8 = new Swiper('.sc-theme .swiper8', {
  slidesPerView: 'auto',
});
const themeSwiper9 = new Swiper('.sc-theme .swiper9', {
  slidesPerView: 'auto',
});
const themeSwiper10 = new Swiper('.sc-theme .swiper10', {
  slidesPerView: 'auto',
});
const specialpriceSwiper = new Swiper('.sc-specialprice .swiper', {
  loop: true,
  pagination: {
    el: ".sc-specialprice .swiper-pagination",
    type: "fraction",
  },

  navigation: {
    prevEl: '.sc-specialprice .swiper-button-prev',
    nextEl: '.sc-specialprice .swiper-button-next',
  },
});
const makeityoursSwiper = new Swiper('.sc-makeityours .swiper', {
  loop: true,
  pagination: {
    el: ".sc-makeityours .swiper-pagination",
    clickable: true
  },
});
const wconceptTVSwiper = new Swiper('.sc-wconceptTV .swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: ".sc-wconceptTV .swiper-pagination",
    type: "fraction",
  },

  navigation: {
    prevEl: '.sc-wconceptTV .swiper-button-prev',
    nextEl: '.sc-wconceptTV .swiper-button-next',
  },
});
const wconceptTVSwiper2 = new Swiper('.sc-wconceptTV .swiper-back', {
  effect: 'fade',
  touchRatio: 0,
});
wconceptTVSwiper.on('slideChange', function () {
  idx = wconceptTVSwiper.realIndex;
  wconceptTVSwiper2.slideToLoop(idx);
});

const styleSwiper = new Swiper('.sc-style .product-list-wrap', {
  slidesPerView: 'auto',
  observer: true,
  observeParents: true,
  pagination: {
    el: ".sc-style .swiper-pagination",
    type: "fraction",
  },
});
const styleSwiper2 = new Swiper('.sc-style .category-list-wrap', {
  slidesPerView: 'auto',
  speed: 1500
});

// mdpick
const mdpickSwiper1 = new Swiper('.sc-mdpick .category-list-wrap.swiper', {
  slidesPerView: 'auto',
});

const mdpickSwiper2 = new Swiper('.sc-mdpick .main-swiper', {
  loop: true,
});

mdpickSwiper1.on('slideChange', function () {
  realIdx = this.realIndex;
  mdpickSwiper1.slideTo(realIdx);
  mdpickSwiper2.slideToLoop(realIdx);
})

mdpickSwiper2.on('slideChange', function () {
  realIdx = this.realIndex;
  mdpickSwiper1.slideTo(realIdx);
  mdpickSwiper2.slideToLoop(realIdx);
  $('.sc-mdpick .btn-category').removeClass('active');
  $('.sc-mdpick .btn-category').eq(realIdx).addClass('active');
})

// ranking
const rankingSwiper1 = new Swiper('.sc-ranking .product-content .category-list-wrap', {
  slidesPerView: 'auto',
});

const rankingSwiper2 = new Swiper('.sc-ranking .product-content .main-swiper', {
  loop: true,
});

rankingSwiper1.on('slideChange', function () {
  realIdx = this.realIndex;
  rankingSwiper1.slideTo(realIdx);
  rankingSwiper2.slideToLoop(realIdx);
})

rankingSwiper2.on('slideChange', function () {
  realIdx = this.realIndex;
  rankingSwiper1.slideTo(realIdx);
  rankingSwiper2.slideToLoop(realIdx);
  $('.sc-ranking .product-content .btn-category').removeClass('active');
  $('.sc-ranking .product-content .btn-category').eq(realIdx).addClass('active');
})


const rankingSwiper4 = new Swiper('.sc-ranking .brand-content .category-list-wrap', {
  slidesPerView: 'auto',
});

const rankingSwiper5 = new Swiper('.sc-ranking .brand-content .main-swiper', {
  loop: true,
});

rankingSwiper4.on('slideChange', function () {
  realIdx = this.realIndex;
  rankingSwiper4.slideTo(realIdx);
  rankingSwiper5.slideToLoop(realIdx);
})

rankingSwiper5.on('slideChange', function () {
  realIdx = this.realIndex;
  rankingSwiper4.slideTo(realIdx);
  rankingSwiper5.slideToLoop(realIdx);
  $('.sc-ranking .brand-content .btn-category').removeClass('active');
  $('.sc-ranking .brand-content .btn-category').eq(realIdx).addClass('active');
})

