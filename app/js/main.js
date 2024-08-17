$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    })

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    })


    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    })

    if ($(window).width() < 651) {
        $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
    }


    $('.article-slider__box').slick({
        arrows: true,
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-left.svg" alt="previous"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-right.svg" alt="next"></button>',
    })

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },

            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    })

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    })


})
