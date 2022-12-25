document.addEventListener('DOMContentLoaded', function () {
    partnersSwiper();
    gallerySwiper();
    customersSwiper();
})

function partnersSwiper() {
    let swiperContainer = '.partners-swiper';
    let swiperOptions = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 3,
                // spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                // spaceBetween: 40
            }
        }
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function gallerySwiper() {
    let swiperContainer = '.gallery-swiper';
    let swiperOptions = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            }
        }
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}

function customersSwiper() {
    let swiperContainer = '.customers-swiper';
    let swiperOptions = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.customer-card .swiper-button-next',
            prevEl: '.customer-card .swiper-button-prev',
        },
    };
    const swiper = new Swiper(swiperContainer, swiperOptions);
}