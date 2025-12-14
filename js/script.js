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