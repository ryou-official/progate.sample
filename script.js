window.addEventListener('DOMContentLoaded', function(){

  $('.menu-icon').click(function(){
        $('#slide-menu').toggleClass('active');
        //メニューを表示
        if($('#slide-menu').hasClass('active')) {
          // ハンバーガーアイコンを管理する
          $('.fa-bars').hide();
          $('.fa-times').show();
          //オーバーレイを管理する
          $('.overlay').addClass('open');
        //メニューを非表示
        }else {
          // ハンバーガーアイコンを管理する
          $('.fa-times').hide();
          $('.fa-bars').show();
          //オーバーレイを管理する
          $('.overlay').removeClass('open');
        }
      });

      //オーバーレイをクリックしてメニューを非表示
     $('.overlay').click(function(){
       if($('#slide-menu').hasClass('active')) {
         //メニューを非表示
         $('#slide-menu').removeClass('active');
         //アイコンを変更
         $('.fa-times').hide();
         $('.fa-bars').show();
         //オーバーレイを非表示
         $('.overlay').removeClass('open');
         $('.open').css('transition-duration', '5s');
       }
     });

  //ログインモーダル クリックイベント
  $('.login-show').click(function(){
    $('#login-modal').fadeIn();
    $('.modal-overlay').addClass('.open');
  });

  //新規登録モーダル クリックイベント
  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
    $('.modal-overlay').addClass('.open');

  });

  //モーダル非表示
  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.modal-overlay').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
    $('.modal-overlay').removeClass('open');
    $('.open').css('transition-duration', '5s');
  });

  //ロゴクリックでスクロールトップ
  $('.scroll-top').click(function(){
    $('html, body').animate({'scrollTop': 0},500);;
  });

  //ヘッダーメニュークリックでスクロール
  $('header a').click(function(e){
      e.preventDefault();
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      console.log(position);
      $('html, body').animate({'scrollTop': position},300);
    });

});
