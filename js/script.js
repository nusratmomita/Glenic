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
    // breakpoints: {
    //     0: { slidesPerView: 1 },
    //     640: { slidesPerView: 1 },
    //     768: { slidesPerView: 2 },
    //     1200:{ slidesPerView: 3 },
    // },

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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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

 
// for service slider
// var swiperService = new Swiper(".mySwiper2", {
// spaceBetween: 30,
// slidesPerView: 4,
// pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
// },
// breakpoints: {
//     0: { slidesPerView: 1 },
//     640: { slidesPerView: 1 },
//     768: { slidesPerView: 3 },
//     1200: { slidesPerView: 4 }, 
// }
// });