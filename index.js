const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Start with 1 slide on small screens
  spaceBetween: 10, // Space between slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1, // Show 1 slide on small screens
    },
    768: {
      slidesPerView: 2, // Show 2 slides on medium screens
    },
    1024: {
      slidesPerView: 3, // Show 3 slides on larger screens
    },
  },
});
