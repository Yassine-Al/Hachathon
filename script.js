let input = document.querySelector(".input");
let body = document.querySelector("body");
let p = document.querySelector('span')




function updateBody() {
    if (input.checked) {
        body.style.background = "#151d2a";
        p.style.color = 'white'
    }
    else {
        body.style.background = "white";
        p.style.color = "#151d2a"
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
 });