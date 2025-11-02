import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 24
})

//import mobileNav from './modules/mobile-nav.js';
//mobileNav();

// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });

import tagline from './modules/tagline.js';
tagline();