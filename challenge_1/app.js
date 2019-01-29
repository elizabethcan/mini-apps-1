var gamePieces = 0;

document.addEventListener("click", function(e) {
	if (e.target.className === "tableCell") {
		placePiece(e.target);
		if (gamePieces === 9) {
			document.getElementById('winner').textContent = 'Tie Game!';
		}
	} else if (e.target.id === "resetBtn") {
		resetGame();
	}
});

var pickPiece = function(gamePieces) {
	var piece;
	if (gamePieces % 2 === 0) {
		piece = 'X';
	} else {
		piece = 'O';
	}
	return piece;
}

var resetGame = function() {
	var tableCells = document.getElementsByClassName("tableCell");
	for (var i = 0; i < tableCells.length; i++) {
		tableCells[i].textContent = '';
	}
	document.getElementById('winner').textContent = '';
}

var placePiece = function(ele) {
	console.log(`game pieces start: ${gamePieces}`);
	console.log(ele);
	var id = ele.id;
	console.log('text content: ', document.getElementById(id).textContent);
	var textContent = document.getElementById(id).textContent;
	if (!textContent) {
		var text = pickPiece(gamePieces);
		document.getElementById(id).textContent = text;
		gamePieces += 1;
	}
	console.log(`game pieces end: ${gamePieces}`);
}

var winners = [
	[]
]
