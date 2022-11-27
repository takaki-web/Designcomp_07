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
  $(".js-l-header__burger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".js-l-header__burger-menu").addClass("active");
      $("body").addClass("fixed");
    } else {
      $(".js-l-header__burger-menu").removeClass("active");
      $("body").removeClass("fixed");
    }
  });
});
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$(".l-header__burger-menu-link, .l-header__burger-menu-link a").on("click", function (event) {
  $(".js-l-header__burger-btn").trigger("click");
});

$(function () {
  $("#js-p-index-story__slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    slidesToShow: 2,
    speed: 3000,
    nextArrow: '<div class="p-index-story__scroll slide-arrow next-arrow">scroll</div>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
