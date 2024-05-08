$(function () {
  // slide top
  $("#slides .slider").slick({
    dots: true,
    arrows: false,
  });

  //   countup number
  $(".count_num").countUp();

  //   slider testimonials
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

let btnSwitch = document.querySelectorAll(".theme-toggle");
let currentTheme = document.querySelector("html");
btnSwitch.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    currentTheme.dataset.theme =
      currentTheme.dataset.theme === "light" ? "dark" : "light";
  });
});

let header = document.getElementById("header");
let backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll" , function(){
    let position = this.scrollY;
    // add class header
    if( position > 30 ) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
    // add class back to top
    if (position > 100) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});