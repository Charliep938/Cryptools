const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    speed: 200,
    spaceBetween: 100,

    autoplay: {
    delay: 2000,
    },
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });