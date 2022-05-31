// Burger
let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}


//Slider

$(document).ready(function(){
    $('.carousel').slick({
        arrows: false,
        dots: true,
    });
});