var form=document.querySelector(".search-form"),
		btnSearch=document.querySelector(".btn-search"),
		btnForm=form.querySelector(".btn-form"),
		dataIn=form.querySelector("[name=datain]"),
		dataOut=form.querySelector("[name=dataout]"),
		adults=form.querySelector("[name=adults]"),
		children=form.querySelector("[name=children]");

btnSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("search-form-close");
	form.classList.remove("search-form-error");
});

form.addEventListener("submit", function (evt) {			
	if(!dataIn.value || !dataOut.value || !adults.value || !children.value) {
		evt.preventDefault();
		form.classList.add("search-form-error");
	};
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (!form.classList.contains("search-form-close")) {
		form.classList.add("search-form-close");
		};
	};
});