//<![CDATA[ 
$(document).ready(function () {



  //탭 클릭시 메인으로 토스
  $('.bpRemoveLink').click(function (e) {
    e.preventDefault();
    window.location.replace($(this).attr('loc'));
  });

  // 탭 스크립트
  $('.tab-link a').on('click', function () {
    var id = $(this).data('id');
    $('.tab-link li').removeClass('active');
    $(this).parent().addClass('active');
    $('[class^="tab-panel"]').removeClass('open');
    $('#' + id).addClass('open');
  });
  // 탭 링크 클릭시 부드럽게 이동
  // $('.tab-link').click(function () {
  //   $('html, body').animate({
  //     scrollTop: ($($.attr(this, 'href')).offset().top - 60)
  //   }, 600);
  //   return false;
  // });
  //   var target = $($anchor.attr('href'));
  //   $('.tab-link').click(function () {
  //   if (target && target.offset()) {
  //     $('html, body').animate({
  //       scrollTop: target.offset().top - 60
  //     }, 600);
  //   }
  // });

  // var anchor = $(this);

  // $('html, body').stop().animate({
  //     scrollTop: $(anchor.attr('href')).offset().top
  // }, 850);

  // event.preventDefault();
  // 카드 자세히보기 버튼
  $('.acc-link button').on('click', function () {
    var moreBlock = $(this).parent().next('.acc-panel');
    //현재 스크롤 위치 기억
    var currentScroll = $(window).scrollTop();
    if (moreBlock.css('display') === 'block') {
      moreBlock.slideUp(200);
      $(this).html("자세히보기" + "<i></i>");
      $(this).removeClass('up').addClass('down');
    } else {
      $(this).parent().next('.acc-panel').slideDown(200);
      $(this).html("닫기" + "<i></i>");
      $(this).removeClass('down').addClass('up');
      $('html, body').animate({ scrollTop: currentScroll }, 100);

    }
  });

  /* 카드 오른쪽 상단 버튼영역 */
  $('.btn-sub').on('click', function () {
    $(this).siblings('ul').slideToggle();
  });

  // 공통팝업
  $('.btn-popup-open').on('click', function () {
    $('body').addClass('not-scroll');

    var popupID = $(this).attr('data-id');
    $('#' + popupID).addClass('open');

    if ($(".popup-wrap").hasClass("open") == true) {
      $('.popup-scroll > section').css({ height: $(window).height() - 130 + "px" }, 1000);
    }
  });

  // 팝업 닫기
  $('.btn-popup-close').on('click', function () {
    $('body').removeClass('not-scroll');
    $('.popup-wrap').removeClass('open');
  });

  function isWithin() {
    var el = $('.js-date');
    // data-start="2020-09-20T10:00" data-end="2020-08-20T00:00"
    el.each(function () {
      var $this = $(this)
      var start = new Date($this.data('start'))
      var end = new Date($this.data('end'))
      var today = new Date();
      var isShow = today - start > 0 && end - today > 0;

      if (end - start < 0) console.error('날짜를 다시 입력해 주세요')

      if (isShow) {
        $this.show();
      } else {
        $this.remove();
      }
    });
  }
  isWithin();



});
//]]>