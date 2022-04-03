const mugPics = document.getElementsByClassName("mug_pic");
mugPics[0].classList.add("mug_pic_active");

arrowLeft.addEventListener("click", () => {
	mugPics[slideIndex].classList.remove("mug_pic_active");
	slideIndex -= 1;
	if (slideIndex == -1) {
		slideIndex = mugPics.length - 1;
	}
	mugPics[slideIndex].classList.add("mug_pic_active");
});

arrowRight.addEventListener("click", () => {
	mugPics[slideIndex].classList.remove("mug_pic_active");
	slideIndex += 1;
	if (slideIndex == mugPics.length) {
		slideIndex = 0;
	}
	mugPics[slideIndex].classList.add("mug_pic_active");
});
