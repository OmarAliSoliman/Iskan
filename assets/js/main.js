$(document).ready(function () {

  AOS.init();

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".mynavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "1");
    } else {
      $(".mynavbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });


  if ($(".customSelect").length) {
    $(".customSelect").niceSelect();
  }

  $(".see-more").click(function () {
    $('.know-more-box').slideDown();
  });

  $(".read-less").click(function () {
    $('.know-more-box').slideUp();
  });

  

  var realstateSlider = document.querySelector("#realStateSlider");

  $(realstateSlider).owlCarousel({
    items: 3,
    loop: true,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1440: {
        items: 3,
      },
    },
  });


  var newaddedSlider = document.querySelector("#newAddedSlider");

  $(newaddedSlider).owlCarousel({
    items: 3,
    loop: true,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1440: {
        items: 3,
      },
    },
  });


  var ourclientSlider = document.querySelector("#ourClientslider");
  $(ourclientSlider).owlCarousel({
    items: 4,
    loop: true,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1440: {
        items: 4,
      },
    },
  });



  $('.mainslider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    dots:false,
    URLhashListener:true
  })
  $('.forslider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:3,
    dots:false,
    center: true,
    URLhashListener:true,
    responsive: {
      0: {
        items: 2,
      },
      524:{
        items: 2,
      },
      768: {
        items: 3,
      },
      1440: {
        items: 3,
      }
    }
  })



});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});
