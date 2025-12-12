// for case study
var swiper = new Swiper(".my-director-slider", {
    slidesPerView: 1,
    spaceBetween:30,
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
});

function openSpecialist(event, index){
    swiper.slideTo(index)

    // Remove active class from all tab buttons
    var tabLinks = document.getElementsByClassName("tablinks");
    // console.log(event.currentTarget)
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Add active class to clicked tab
    if (event) {
        event.currentTarget.classList.add("active");
    }
}

document.getElementById("leftArrow").onclick = function () {
    swiper.slidePrev()
}

document.getElementById("rightArrow").onclick = function () {
    swiper.slideNext()
}


// for review
var swiper = new Swiper(".review_swiper", {
    slidesPerView: 3,
    spaceBetween:30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }, 
    }
});