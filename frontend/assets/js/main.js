// loader 
// $(document).ready(function(){
// 	$('div#loading').removeAttr('id');
// });
var preloader = document.getElementById("loading");
// window.addEventListener('load', function(){
// 	preloader.style.display = 'none';
// 	})
function myFunction() {
    preloader.style.display = 'none';
};
// Banner Slick Slider Starts
$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// Banner Slick Slider Ends
// Navigation Js Scroll Starts
$(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navigation-wrap").css("background", "white");
            $(".nav-link").css("color", "#484d67");
            $(".navigation-wrap").css("box-shadow", "rgb(210 210 210) 0px 0px 6px 0px");
            $(".navigation-wrap").css("padding", "10px 0px");
        } else {
            $(".navigation-wrap").css("background", "white");
            $(".nav-link").css("color", "#484d67");
            $(".navigation-wrap").css("box-shadow", "none");
            $(".navigation-wrap").css("padding", "20px 0px");
        }
    }) // Navigation Js Scroll Ends
$(document).ready(function() {
    // product Gallery and Zoom
    // activation carousel plugin
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });
    // change carousel item height
    // gallery-top
    let productCarouselTopWidth = $('.gallery-top').outerWidth();
    $('.gallery-top').css('height', productCarouselTopWidth);
    // gallery-thumbs
    let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
    $('.gallery-thumbs').css('height', productCarouselThumbsItemWith);
    // activation zoom plugin
    // var $easyzoom = $('.easyzoom').easyZoom();
    // Dropdown Menu On Hover
});