$(document).on('ready', function() {
  $('.signin').on('click', fadeIn)
  $('.close').on('click', fadeOut)
  $('.submit').on('click', errorMsg)
});

function fadeOut(){
  $('.signin').fadeIn()
  $('.modal').fadeOut()
};

function fadeIn() {
  $('.signin').fadeOut()
  $('.modal').fadeIn()
};

function errorMsg() {
  $('input').addClass('.error')
};
