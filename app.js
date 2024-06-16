const space = document.getElementById("space");
const button = document.getElementById("button");
button.addEventListener("click", function () {
	for (let i = 0; j < 16 * 16; i++) {
		var gridsquare = document.createElement("div");
		gridsquare.style.cssText =
			"border: 2px solid green; width: 50px; height: 50px; margin: 5px; display: inline-block;";
		space.appendChild(gridsquare);
	}
});
