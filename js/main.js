$(function () {
  $(".vertical-center").slick({
    dots: false,
    arrows: false,
    vertical: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  });
  // 슬라이드 이미지 전환(모바일용)
  $(".sec1 .slick-slide").each(function () {
    //1단계
    if ($(window).width() < 980) {
      //alert();
      var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
      var img_pc = img.attr("src"); //3단계
      var img_mo = img_pc.replace("_pc", "_m"); //4단계   relapce(a,b) ==> a를 b로 대체
      img.attr("src", img_mo);
      $(".sec1 .slick-list").css({ height: "auto" });
    } else {
      var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
      var img_mo = img.attr("src"); //3단계
      var img_pc = img_mo.replace("_m", "_pc"); //4단계   relapce(a,b) ==> a를 b로 대체
      img.attr("src", img_pc);
    }
  });
  $(window).resize(function () {
    $(".sec1 .slick-slide").each(function () {
      //1단계
      if ($(window).width() < 980) {
        //alert();
        var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
        var img_pc = img.attr("src"); //3단계
        var img_mo = img_pc.replace("_pc", "_m"); //4단계   relapce(a,b) ==> a를 b로 대체
        img.attr("src", img_mo);
        $(".sec1 .slick-list").css({ height: "auto" });
      } else {
        var img = $(this).find("img"); //2단계  find ==> 선택자를 찾는 명령
        var img_mo = img.attr("src"); //3단계
        var img_pc = img_mo.replace("_m", "_pc"); //4단계   relapce(a,b) ==> a를 b로 대체
        img.attr("src", img_pc);
      }
    });
  });

  // 슬라이드 이미지 전환(모바일용)
  $(".pop_close").click(function () {
    $(".popup").fadeOut(300);
  });
  /*
  //따라다니는 팝업
  var UI = {
    init: function () {
      this.quickMenuFn();
      this.topBtn();
    },

    initialize: function () {
      this.id = {
        target: {
          quick: "#quick",
          stickyTop: "#footer",
        },
        topBtnClass: "btn_top",
      };
      this.init();
    },

    quickMenuFn: function () {
      var quick = $(this.id.target.quick);
      var qTop = parseInt(quick.css("top"));

      $(window).scroll(function () {
        var winTop = $(window).scrollTop();

        quick.stop().animate(
          {
            top: winTop + qTop,
          },
          500
        );
      });
    },

    topBtn: function () {
      var btnLocation = $("." + this.id.topBtnClass);
      var timerId = 0;

      $(window).on("scroll", function () {
        var winTop = $(window).scrollTop();
        if (winTop > 200) {
          btnLocation.fadeIn();
          clearInterval(timerId);
          timerId = setInterval(btnEffet, 2000);
        } else {
          btnLocation.fadeOut();
          clearInterval(timerId);
        }
      });

      function btnEffet() {
        btnLocation.fadeTo("300", 0.3).fadeTo("300", 1);
      }

      this.scrollTop(btnLocation);
    },

    scrollTop: function (eTarget, speed) {
      var speed = speed || null;
      eTarget.on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $("body").offset().top,
          },
          speed
        );
      });
    },
  };

  UI.initialize();
  //따라다니는 팝업끝
*/
  $(".nav_btn").click(function () {
    $("#nav").slideToggle();
    $("#nav").hide();
  });
});
