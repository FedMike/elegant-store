import Swiper from 'swiper/bundle';

function swiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        spaceBetween: 12,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        breakpoints: {
            820: {
                spaceBetween: 24
            }
        }
    })
}
export default swiper;