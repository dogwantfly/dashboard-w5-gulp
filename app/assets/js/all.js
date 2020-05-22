$(document).ready(function() {

  $('.btn-star').click(function(e) {
    e.preventDefault();
    $('.btn-star').hide();
    $('.btn-star-fill').show();

  })
  $('.btn-star-fill').click(function(e) {
    e.preventDefault();
    $('.btn-star-fill').hide();
    $('.btn-star').show();

  })

  $('.btn-user').click(function(e) {
    e.preventDefault();
    $('.js-icon').toggleClass('active');
    

  })


});










//reply:
// 顯示管理者回覆區
function displayManagerReply() {
  document.querySelector('.manager-reply').classList.add('show');
}

// 隱藏管理者回覆區
function hideManagerReply() {
document.querySelector('.manager-reply').classList.remove('show');
}