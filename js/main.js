$(function () {
  // 슬라이드 이미지 전환(모바일용)
  $(".pop_close").click(function () {
    $(".popup").fadeOut(300);
  });
  $(".nav_btn").click(function () {
    $("#nav").slideToggle();
    $("#nav").hide();
  });
});
$(function(){
  $('.nav_btn').click(function(){
    $("#nav").show();
  });
  $(".close").click(function () {
    $("#header #nav").fadeOut(300);
  });
});
