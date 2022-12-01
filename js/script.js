var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function(){supportsPassive=true;}});window.addEventListener("testPassive", null, opts);window.removeEventListener("testPassive", null, opts);} catch (e) {}
// ページ内スクロール---------------------------------------------------
const elem1 = document.querySelector('a[href^="#"]'); //単一の要素を取得
const speed = 600; //スクロールスピード
/*---スマホのときはtouchstart---*/
let flag1 = false;
elem1.addEventListener("touchstart",{},supportsPassive?{passive:true}:false, function () { //要素が押されたら
  flag1 = true;
  let href = elem1.getAttribute("href");/* 属性 */
  let rect1 = href.getBoundingClientRect(); //ブラウザの表示領域の左上を基準とする相対座標を取得
  let scrollTop = document.getElementById(href == "#" || href == "" ? "html" : href ); //スクロール量の取得
  let position = rect1.top + scrollTop; //座標とスクロール量を合算
  $("body,html").animate({ scrollTop: position }, speed, "swing"); //スピードも組み合わせて実行
  return false;
});
/*---PCではclick---*/
elem1.addEventListener("click", function () { //要素がクリックされたら
  if (flag1) {
    flag1 = false;
  } else {
    let href = elem1.getAttribute("href");
    let rect1 = href.getBoundingClientRect();
    let scrollTop = document.getElementById(href == "#" || href == "" ? "html" : href );
    let position = rect1.top + scrollTop;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  }
});

// ハンバーガーメニュー---------------------------------------------------
const ham = document.querySelector(".js-l-header__burger-btn"); //単一の要素を取得
const menu = document.querySelector(".js-l-header__burger-menu");
const body = document.querySelector("body");
/*---スマホのときはtouchstart---*/
let flag2 = false;
ham.addEventListener("touchstart",{},supportsPassive?{passive:true}:false, function () { //要素が押されたら
  flag2 = true;
  ham.classList.toggle("active"); //toggle 切り替え
  if (ham.classList.contains("active")) { //判定
    menu.classList.add("active"); //追加
    body.classList.add("fixed"); //追加
  } else {
    menu.classList.remove("active"); //削除
    body.classList.remove("fixed"); //削除
  }
});
/*---PCではclick---*/
ham.addEventListener("click", function () { //要素がクリックされたら
  if (flag2) {
    flag2 = false;
  } else {
  ham.classList.toggle("active");
    if (ham.classList.contains("active")) {
      menu.classList.add("active");
      body.classList.add("fixed");
      } else {
        menu.classList.remove("active");
        body.classList.remove("fixed");
  }
}});

// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように-----------------
const link = document.querySelectorAll(".l-header__burger-menu-link"); //複数の要素を取得
//イベントオブジェクト生成
const triggerEvent1 = new Event('touchstart')
const triggerEvent2 = new Event('click')
/*---スマホのときはtouchstart---*/
let flag3 = false;
link.forEach( //querySelectorAllは配列なのでループさせる必要がある
  e => e.addEventListener("touchstart",{},supportsPassive?{passive:true}:false, function () { //要素がクリックされたら eventのe
    flag3 = true;
    ham.dispatchEvent(triggerEvent1);
  })
);
/*---PCではclick---*/
link.forEach(
  e => e.addEventListener("click", function () {
    if (flag3) {
      flag3 = false;
    } else {
    ham.dispatchEvent(triggerEvent2);
  }
}));

const target = '#slider1';
const options = {
  mediaQuery: 'min',
	type : 'loop',
	speed: 600,
	perPage: 1,
	perMove: 1,
	wheel: true,
	releaseWheel: true,
	trimSpace: false,
	updateOnMove: false,
  gap:20,
  breakpoints: {
    640: {
      perPage: 2,
    },
  }
}
const mySplide = new Splide(target, options);

mySplide.mount();
