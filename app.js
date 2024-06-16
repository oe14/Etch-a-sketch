const space = document.getElementById("space");
// const button = document.getElementById("button");
// button.addEventListener("click", function () {

function start() {
	for (let i = 0; i < 256; i++) {
		var gridsquare = document.createElement("div");

		space.appendChild(gridsquare);
		gridsquare.classList.add("square");
	}
}
