let music = new Audio("MEDIA/ting.mp3");

let turn = "X";
let gameOver = false;
const changeTurn = () => {
	return turn === "X" ? "O" : "X";
};

const checkWin = () => {
	let boxText = document.getElementsByClassName("boxtext");
	let wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	wins.forEach((i) => {
		if (
			boxText[i[0]].innerText === boxText[i[1]].innerText &&
			boxText[i[1]].innerText === boxText[i[2]].innerText &&
			boxText[i[0]].innerText !== ""
		) {
			document.querySelector(".info").innerText =
				boxText[i[0]].innerText + "  WON";
			gameOver = true;
			document
				.querySelector(".imgContainer")
				.getElementsByTagName("img")[0].style.width = "59px";
		}
	});
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
	let boxText = element.querySelector(".boxtext");

	element.addEventListener("click", () => {
		if (boxText.innerText === "") {
			boxText.innerText = turn;
			turn = changeTurn();
			music.play();
			checkWin();
			if (!gameOver) {
				document.getElementsByClassName("info")[0].innerText =
					"turn for " + turn;
			}
		}
	});
});

reset.addEventListener("click", () => {
	let boxText = document.querySelectorAll(".boxtext");
	Array.from(boxText).forEach((element) => {
		element.innerText = "";
	});
	turn = "X";
	gameOver = false;
	document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
	document
		.querySelector(".imgContainer")
		.getElementsByTagName("img")[0].style.width = "0px";
});
