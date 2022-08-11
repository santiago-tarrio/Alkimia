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

  window.addEventListener('scroll', function() {
    let nav = document.getElementById('navbarScroll')
    let alk = document.getElementById('logo-a')
    let position = nav.getBoundingClientRect().bottom;
    let logo = document.getElementById('logo')
    let tamaño = window.innerHeight;
    let pos = logo.getBoundingClientRect().bottom;

    console.log(pos)

    if(position < 0) {
        nav.classList.add('nav-fixed')
        console.log(nav.getBoundingClientRect().top)
        alk.classList.add('alkimia-logo')
    }

    if(pos > 0) {
        nav.classList.remove('nav-fixed');
        alk.classList.remove('alkimia-logo');
    }
})