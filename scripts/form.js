("use strict");
// ----------------->  Burger Open Close  <-------------------

export function burger() {
  const burger = document.querySelector(".burgerbar");
  const navMenu = document.querySelector(".navbar");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// ---------------> Header BG <--------------------

export function headerBG() {
  let header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });
}

//----------------> Drop Login <-----------------

export function dropLogin() {
  let loginBtn = document.querySelector(".login-btn");
  let dropLogin = document.querySelector(".drop-login");

  loginBtn.onclick = () => {
    dropLogin.classList.toggle("drop-login-open");
  };
}

// --------------> Control Swiper <---------------

export function controlSwiper() {
  var swiper = new Swiper(".control-images", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

//-----------> Main Swiper <---------------

export function mainSwiper() {
  var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

export function scrollTop() {
  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show or hide the button based on the scroll position
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    // Scroll to the top with smooth animation when the button is clicked
    scrollToTopBtn.onclick = function () {
      scrollToTop();
    };

    // Smooth scroll to the top function
    function scrollToTop() {
      var currentPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8); // You can adjust the "8" for smoother/faster scrolling
      }
    }
  });
}
