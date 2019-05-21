AOS.init({
  once: true
});

$(".partner-items").slick({
  infinite: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
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

$('.toggle').click(function (e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('showw')) {
    $this.next().removeClass('showw');
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find('li .inner').removeClass('showw');
    $this.next().toggleClass('showw');
    var txt = $this.parent().find('.inner p').html();
    console.log(txt);
    $this.parent().parent().parent().find('.text').html(txt);
    
  }
});
