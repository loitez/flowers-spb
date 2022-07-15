$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img src="../img/slider-arr.png" alt="Влево" class="arrow arrow-left">',
        nextArrow: '<img src="../img/slider-arr.png" alt="Вправо" class="arrow arrow-right">'
    });
})

const feedbackSlider = document.querySelector('.feedback__content');
const feedbackSliderItems = document.querySelectorAll('.feedback__card');
const feedbackArrowLeft = document.querySelector('.feedback__arrow-left');
const feedbackArrowRight = document.querySelector('.feedback__arrow-right');
let index = 0;

const length = feedbackSliderItems.length - 1;


feedbackArrowLeft.addEventListener('click', () => {
    if (index === 0) {
        index = length;
    } else {
        index--;
    }
    feedbackSliderItems.forEach((item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
        feedbackSliderItems[index].classList.add('active')
    })
})
feedbackArrowRight.addEventListener('click', () => {
    if (index < length) {
        index++;
    } else {
        index = 0;
    }
    feedbackSliderItems.forEach((item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
        feedbackSliderItems[index].classList.add('active')
    })
})


const closeMenuBtn = document.querySelector('.menu__close');
const menus = document.querySelectorAll('.menu__list');

closeMenuBtn.addEventListener('click', () => {
        menus.forEach((item) => {
            item.classList.toggle('active-menu')
        })
}
)
