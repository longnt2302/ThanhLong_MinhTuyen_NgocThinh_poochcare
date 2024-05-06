$(document).ready(function () {
  $("#slides .slider").slick({
    dots: true,
    arrows: false,
  });

  $(".count_num").countUp();

  $("#testimonials .testimonials_carousel").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});

let btnSwitch = document.querySelectorAll('.theme-toggle');
let currentTheme = document.querySelector("html");
for (var i = 0; i < btnSwitch.length; i++) {
    btnSwitch[i].addEventListener('click', function(event) {
          currentTheme.dataset.theme = currentTheme.dataset.theme === "light" ? "dark" : "light";
    });
}

let header = document.getElementById("header");
let backToTop = document.querySelector(".back-to-top");
$(window).scroll(function () {
  let $height = $(window).scrollTop();
  // add class header
  if ($height > 30) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  // add class back to top
  if ($height > 100) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});