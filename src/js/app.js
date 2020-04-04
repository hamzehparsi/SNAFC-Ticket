class App {
  constructor () {
    console.info('ES6 Modules work!');
  }
  
}
export default App;

$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
          $('.top-menu').addClass('fixed');
      }
      else {
          $('.top-menu').removeClass('fixed');
      }
  });
});

$('a[href$="#Modal"]').on( "click", function() {
$('.ui.basic.modal').modal('show');
});
