const space = document.getElementById("space");
const blackBtn = document.getElementById("blackBtn");
const blueBtn = document.getElementById("blueBtn");
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const smallerBtn = document.getElementById("smallerBtn");
const biggerBtn = document.getElementById("biggerBtn");
const smallerBtnExtra = document.getElementById("SmallerBtnExtra");

let currentColor = "black";

function setColorListeners() {
	blackBtn.addEventListener("click", () => (currentColor = "black"));
	blueBtn.addEventListener("click", () => (currentColor = "blue"));
	redBtn.addEventListener("click", () => (currentColor = "red"));
	greenBtn.addEventListener("click", () => (currentColor = "green"));
}

function addMouseoverEventListeners(squares) {
	squares.forEach((square) => {
		square.onmouseover = function () {
			square.style.backgroundColor = currentColor;
		};
	});
}

function createGrid(size, className) {
	space.innerHTML = "";
	for (let i = 0; i < size; i++) {
		const gridsquare = document.createElement("div");
		gridsquare.classList.add(className);
		space.appendChild(gridsquare);
	}
	const squares = document.querySelectorAll(`#space > .${className}`);
	addMouseoverEventListeners(squares);
}

// Set the initial color listeners
setColorListeners();

// Initialize the grid with the default size
createGrid(256, "biggerBrush");

smallerBtn.addEventListener("click", function () {
	createGrid(1024, "smallerBrush");
});

biggerBtn.addEventListener("click", function () {
	createGrid(256, "biggerBrush");
});
smallerBtnExtra.addEventListener("click", function () {
	createGrid(4096, "smallerBrushExtra");
});
