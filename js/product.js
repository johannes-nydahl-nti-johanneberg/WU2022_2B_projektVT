const mugPics = document.getElementsByClassName("mug_pic");
const decreaseBtn = document.querySelector("#mug_quantity_minus");
const increaseBtn = document.querySelector("#mug_quantity_plus");
const quantityNumberElement = document.querySelector("#mug_quantity_number");
const arrowLeftProduct = document.querySelector("#mug_left_arrow_product");
const arrowRightProduct = document.querySelector("#mug_right_arrow_product");
const arrowLeftSimilar = document.querySelector("#mug_left_arrow_similar");
const arrowRightSimilar = document.querySelector("#mug_right_arrow_similar");
const similarShowcase = document.querySelector("#mug_similar_showcase");

let similarIsRight = false;

mugPics[0].classList.add("mug_pic_active");

arrowLeftProduct.addEventListener("click", () => {
	mugPics[slideIndex].classList.remove("mug_pic_active");
	slideIndex -= 1;
	if (slideIndex == -1) {
		slideIndex = mugPics.length - 1;
	}
	mugPics[slideIndex].classList.add("mug_pic_active");
});

arrowRightProduct.addEventListener("click", () => {
	mugPics[slideIndex].classList.remove("mug_pic_active");
	slideIndex += 1;
	if (slideIndex == mugPics.length) {
		slideIndex = 0;
	}
	mugPics[slideIndex].classList.add("mug_pic_active");
});

arrowRightSimilar.addEventListener("click", () => {
	if (!similarIsRight) {
		similarShowcase.classList.add("mug_similar_showcase_right");
		similarIsRight = true;
	}
});

arrowLeftSimilar.addEventListener("click", () => {
	if (similarIsRight) {
		similarShowcase.classList.remove("mug_similar_showcase_right");
		similarIsRight = false;
	}
});

decreaseBtn.addEventListener("click", () => {
	const quantityNumber = parseInt(quantityNumberElement.innerHTML);
	if (quantityNumber > 1) {
		quantityNumberElement.innerHTML = quantityNumber - 1;
	}
});

increaseBtn.addEventListener("click", () => {
	const quantityNumber = parseInt(quantityNumberElement.innerHTML);
	if (quantityNumber < 999) {
		quantityNumberElement.innerHTML = quantityNumber + 1;
	}
});
