const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav_menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
	navMenu.classList.toggle("nav-active");
	burger.classList.toggle("toggle");
	body.classList.toggle("no-scroll");
});
