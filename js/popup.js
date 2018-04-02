var link = document.querySelector(".search-button");
var popup = document.querySelector(".appointment-form");

	popup.classList.add("form-close");

	link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-close");
});
