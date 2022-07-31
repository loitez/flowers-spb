$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img src="https://imageup.ru/img42/3986229/arrow.png" alt="Влево" class="arrow arrow-left">',
        nextArrow: '<img src="https://imageup.ru/img42/3986229/arrow.png" alt="Вправо" class="arrow arrow-right">'
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
        closeMenuBtn.classList.toggle('.active')
    if (closeMenuBtn.classList.contains('.active')) {
        changeColor('white')
    } else {
        changeColor('#AE7C78')
    }
}
)

 function changeColor (color) {
     const lines = closeMenuBtn.querySelectorAll('line')
     lines.forEach((item) => {
         setTimeout(() => {
             item.style.stroke = color;
         }, 400)
     })
}
