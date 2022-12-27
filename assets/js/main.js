import { CountUp } from "../vendors/countup/countUp.min.js";

document.addEventListener('DOMContentLoaded', function () {
    partnersSwiper();
    gallerySwiper();
    customersSwiper();
    formSetMask();
    fixNavbar();
    setCounter();
    menuToggle();
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

function fixNavbar() {
    const header = document.querySelector('.header').offsetHeight;
    const top_secondary = document.querySelector('.top-secondary');
    document.addEventListener('scroll', function (e) {
        if (window.pageYOffset >= header) {
            top_secondary.classList.add('fixed');
        } else {
            top_secondary.classList.remove('fixed');
        }
    })
}

function setCounter() {
    const about_count = document.querySelector('#about_count');
    const adv_counts = document.querySelectorAll('.adv-count .counter');

    let options = {
        enableScrollSpy: true
    }; 

    const aboutCounter = new CountUp('about_count', about_count.dataset.count, options);

    adv_counts.forEach((elem, id, array) => {
        if (id === array.length - 1) {
            options['suffix'] = '+';
        }
        const adv_Counter = new CountUp(`${elem.id}`, elem.dataset.count, options);

        if (!adv_Counter.error) {
            adv_Counter.handleScroll();
        } else {
            console.error(adv_Counter.error);
        }
    });

    if (!aboutCounter.error) {
        aboutCounter.handleScroll();
    } else {
        console.error(aboutCounter.error);
    }
}

function menuToggle() {
    const button = $('.burger');
    const menu = $('.header__nav');

    button.on('click', (e) => {
        $(e.target).toggleClass('active');
        menu.toggleClass('show')
    })
}

function formSetMask() {
    $('input[name=date]').mask('00/00/0000');
}