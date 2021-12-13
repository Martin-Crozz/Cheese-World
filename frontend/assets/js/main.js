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
//Menu On Hover
$('body').on('mouseenter mouseleave', '.nav-item', function(e) {
    if ($(window).width() > 750) {
        var _d = $(e.target).closest('.nav-item');
        _d.addClass('show');
        setTimeout(function() {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
    }
});
// End Menu On Hover
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
$(document).ready(function() {
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
        })
        // Dropdown Hover Open
    $('.nav-item').on('mouseover', function() {
        $(this).find('.dropdown-menu').addClass('show');
    })
    $('.nav-item').on('mouseout', function() {
        $(this).find('.dropdown-menu').removeClass('show');
    })
});
// Navigation Js Scroll Ends