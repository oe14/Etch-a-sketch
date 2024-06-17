const space = document.getElementById("space");

const blackBtn = document.getElementById("blackBtn");
const blueBtn = document.getElementById("blueBtn");
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");

function start() {
	for (let i = 0; i < 256; i++) {
		var gridsquare = document.createElement("div");
		gridsquare.classList.add("square");
		space.appendChild(gridsquare);
	}

	// Query squares after they are added to the DOM
	const squares = document.querySelectorAll(".square");

	blackBtn.addEventListener("click", function () {
		squares.forEach((square) => {
			square.addEventListener("mouseover", function () {
				square.style.backgroundColor = "black";
			});
		});
	});

	blueBtn.addEventListener("click", function () {
		squares.forEach((square) => {
			square.addEventListener("mouseover", function () {
				square.style.backgroundColor = "blue";
			});
		});
	});

	redBtn.addEventListener("click", function () {
		squares.forEach((square) => {
			square.addEventListener("mouseover", function () {
				square.style.backgroundColor = "red";
			});
		});
	});

	greenBtn.addEventListener("click", function () {
		squares.forEach((square) => {
			square.addEventListener("mouseover", function () {
				square.style.backgroundColor = "green";
			});
		});
	});
}

// Call the start function to initialize the grid and set up event listeners
start();
