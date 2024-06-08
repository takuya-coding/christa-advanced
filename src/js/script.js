jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".js-drawer").fadeToggle("is-active");
    $(".js-drawer-bg").fadeToggle("is-active");
  });
});
