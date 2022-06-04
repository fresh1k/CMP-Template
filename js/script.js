// Burger
let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}


//Slider

$(document).ready(function(){
    $('.carousel-mob').slick({
        arrows: false,
        dots: true,
    });
    $('.carousel-desk').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.reviews').slick({
        arrows: true,
        dots: false,
    });
});