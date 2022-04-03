const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#navmenu");
const navBar = document.querySelector(".navbar");
const body = document.querySelector("body");
const arrowLeft = document.querySelector("#mug_left_arrow");
const arrowRight = document.querySelector("#mug_right_arrow");

const isMug = document.URL.includes("mug.html");

let lastScrollY = window.scrollY;
let slideIndex = 0;

if (isMug) {
	navBar.classList.remove("navbar_top");
}

burger.addEventListener("click", () => {
	navMenu.classList.toggle("nav_active");
	burger.classList.toggle("toggle");
	body.classList.toggle("no_scroll");
	if (navBar.classList.contains("navbar_top") && navMenu.classList.contains("nav_active")) {
		navBar.classList.remove("navbar_top");
	} else if (!navMenu.classList.contains("nav_active") && window.scrollY === 0 && !isMug) {
		navBar.classList.add("navbar_top");
	}
});

window.addEventListener("scroll", () => {
	if (lastScrollY < window.scrollY) {
		navBar.classList.add("navbar_hidden");
	} else {
		navBar.classList.remove("navbar_hidden");
		if (window.scrollY > 0) {
			navBar.classList.remove("navbar_top");
		} else if (!isMug) {
			navBar.classList.add("navbar_top");
		}
	}
	lastScrollY = window.scrollY;
});
