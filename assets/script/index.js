
window.onscroll = function () { sticky_header() };

var header = document.getElementById("page-header");
var sticky = header.offsetTop - 70;

function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-menu");
  } else {
    header.classList.remove("sticky-menu");
  }
}
$(".partner-items").slick({
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".related-case-study-carousel").slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});