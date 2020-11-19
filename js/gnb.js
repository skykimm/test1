//<![CDATA[ 

$(document).ready(function () {
  var getIdx = location.pathname.search('/html');
  var isPath = location.pathname.slice(0, getIdx);
  var pageGnbURL = window.location.href;

  //로딩바 
  window.onload = function () {
    $('body').removeClass('before-load');
    $('.loading').remove();
  };

  // gnb 로드
  $('#gnb').load(isPath + '/html/include/gnb.html', function () {
    var pageGnbTitle = $('#gnb').attr('data-name');
    $('#mainGnbTitle').append('<h1>' + pageGnbTitle + '</h1>');
    changeUrl();
  });
  var pageActionBarTitle = $('#actionbar').attr('data-name');
  if (pageActionBarTitle == undefined) {
    $('#actionbar').load(isPath + '/html/include/actionbar_service.html .footer-gnb', function () {
      changeUrl();
    });
  } else {
    $('#actionbar').load(isPath + '/html/include/actionbar_boostpark.html', function () {
      changeUrl();
    });
  }
  /***********************************************
   함수
   ***********************************************/
  // 주소 자동 입력

  function changeUrl() {
    var $a = $("a");
    var $img = $("img");
    $a.each(function () {
      var $href = $(this).attr("href");
      var isChange = $href.slice(0, 5);
      if (isChange == "/html") {
        $(this).attr("href", isPath + $href);
      }
    });
    $img.each(function () {
      var $src = $(this).attr("src");
      var isChange = $src.slice(0, 4);
      if (isChange == "/img") {
        $(this).attr("src", isPath + $src);
      }
    });
  }

  // 플로팅 랜덤 노출  함수
  function floating() {
    var $selector = $('.floating-wrap > [class*="jump"]');
    var selectorIndex = Math.round(Math.random() * 1);
    var active = "active"

    var pageGnbId = pageGnbURL.substring(pageGnbURL.indexOf("html") + 5, pageGnbURL.lastIndexOf("/"));
    var array = ["service", "vrgame"]
    //url 체크 
    for (var i = 0; i < array.length; i++) {
      if (pageGnbId == array[i]) {
        $selector.eq(selectorIndex).addClass(active).fadeIn(100);

        scrollHide($selector, selectorIndex, active);
      }
    }
  }
  // 플로팅 슬라이드 함수 
  function scrollHide($selector, selectorIndex, active) {
    $(window).scrollStopped(function () {
      var isActive = $selector.hasClass(active);
      var scroll_top = $(this).scrollTop(); //현재 높이
      if (scroll_top >= 200) {
        $selector.eq(selectorIndex).stop().animate({ bottom: "-120px", opacity: "0" }, 300).removeClass(active);
      } else if (!isActive) {
        $selector.eq(selectorIndex).stop().animate({ bottom: "0", opacity: "1" }, 300).addClass(active);
      }
    });
  }
  // 스크롤 종료 감지
  $.fn.scrollStopped = function (callback) {
    var that = this, $this = $(that);
    $this.scroll(function (ev) {
      clearTimeout($this.data('scrollTimeout'));
      $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
    });
  };


});
//]]>