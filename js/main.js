function hamburger_toggle() {
  $("#nav").toggle();
  $(".pda_menu").toggleClass("open");
}

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: false,
        loop: false,
        margin: 20
      }
    }
  });
});
