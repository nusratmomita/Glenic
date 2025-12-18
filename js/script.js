// preloader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("preloader").style.transition = "opacity 0.7s ease";
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 700);
    }, 3000);
});

// for case study
var swiper = new Swiper(".case_study_slider", {
    slidesPerView: 1,
    spaceBetween:30,
    pagination: {
        el: ".case_study_slider_pagination3",
        clickable: true,
    },
});

// case study
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

// for search box
const searchToggle = document.getElementById("searchToggle");
const searchDropdown = document.getElementById("searchDropdown");

searchToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    searchDropdown.classList.toggle("opacity-0");
    searchDropdown.classList.toggle("invisible");
    searchDropdown.classList.toggle("translate-y-2");
});

// Prevent closing when clicking inside dropdown
searchDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close when clicking outside
document.addEventListener("click", () => {
    searchDropdown.classList.add("opacity-0", "invisible", "translate-y-2");
});

// for banner slider
var swiperBanner = new Swiper(".hero_banner_slider", {
    navigation: {
        nextEl: ".custom-swiper-btn_next",
        prevEl: ".custom-swiper-btn_prev",
    },
});

// for header drawer
const drawer = document.getElementById("drawer");
const drawerIcon = document.getElementById("drawerIcon");
const crossIcon = document.getElementById("crossIcon");
const overlay = document.getElementById("overlayDrawer");

drawerIcon.addEventListener("click", () => {
    drawer.classList.remove("hidden");
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden")
});

crossIcon.addEventListener("click", () => {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden")

    setTimeout(() => {
        drawer.classList.add("hidden");
    }, 300);
});

// mobile navbar
 // getting all the HTML
const hamburger = document.getElementById("hamburger"); 
const mobileDrawer = document.getElementById("mobileDrawer"); 
const mobileClose = document.getElementById("mobileClose"); 
const overlayHeader = document.getElementById("overlayHeader"); 

const mobilePageNav = document.getElementById("mobilePageNav"); 
const mobilePageNavMenu = document.getElementById("mobilePageNavMenu");

// console.log(drawer, overlay, hamburger, crossIcon, mobilePageNav, mobilePageNavMenu);

// Open drawer
hamburger.addEventListener("click", () => {
    mobileDrawer.classList.remove("-translate-x-full");
    overlayHeader.classList.remove("hidden");
});

// Close drawer (X button)
mobileClose.addEventListener("click", () => {
    mobileDrawer.classList.add("-translate-x-full");
    overlayHeader.classList.add("hidden");
});

// Close drawer (overlay click)
overlayHeader.addEventListener("click", () => {
    mobileDrawer.classList.add("-translate-x-full");
    overlayHeader.classList.add("hidden");
});

mobilePageNav.addEventListener("click", function() {
    mobilePageNavMenu.classList.toggle("hidden");
})

// for video popup
$(document).ready(function() {
$('.video-popup').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                },
        }
    }
});
});

// for review
var swiper_review = new Swiper(".review_swiper", {
    slidesPerView: 3,
    spaceBetween:30,
    pagination: {
        el: ".review_swiper_pagination",
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }, 
    }

});

// for service slider
var service_swiper = new Swiper(".mySwiper2", {
spaceBetween: 30,
slidesPerView: 4,
pagination: {
    el: ".swiper-pagination2",
    clickable: true,
},
breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }, 
}
});

//  sticky navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    const blackLogo = document.querySelector(".blackLogo");
    const whiteLogo = document.querySelector(".whiteLogo");

    if(window.scrollY > 0){
        header.classList.add("scrolled");
        document.querySelector(".navLinks").classList.add("navLinks-colored");
        document.querySelector(".nestedLink").classList.add("nestedLink");


        blackLogo.classList.add("hidden");
        whiteLogo.classList.remove("hidden");
    }
    // normal
    else{
        header.classList.remove("scrolled");
        document.querySelector(".navLinks").classList.remove("navLinks-colored");


        blackLogo.classList.remove("hidden");
        whiteLogo.classList.add("hidden");
    }
})