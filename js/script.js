// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

// ハンバーガーメニュー
$(function () {
  $('.js-burger-btn').click(function () {
    $(this).toggleClass('active')

    if ($(this).hasClass('active')) {
      $('.js-burger-menu').addClass('active')
    } else {
      $('.js-burger-menu').removeClass('active')
    }
  })
})
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$('#menu a[href]').on('click', function (event) {
  $('.js-burger-btn').trigger('click')
})
// ×ボタン押したらハンバーガーメニューが閉じるように
$('.js-burger-menu').on('click', function (event) {
  $('.js-burger-btn').trigger('click')
})

$(function () {
  $("#js-p-index-story__slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    slidesToShow: 2,
    speed: 3000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  });
});


