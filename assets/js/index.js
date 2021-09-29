/*=============
  商品スライド
=============*/
if (window.matchMedia("(max-width: 769px)").matches) {
  $('.slide').slick({
    // centerMode: true,
    // centerPadding: '0%',
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    prevArrow: '<img src="assets/lib/slick/img/prev-arrow.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="assets/lib/slick/img/next-arrow.png" class="slide-arrow next-arrow">'
  });
}
