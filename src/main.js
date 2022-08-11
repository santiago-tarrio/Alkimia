var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 5,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },}
  });