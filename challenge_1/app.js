var gamePieces = 0;

document.addEventListener("click", function(e) {
	if (e.target.className === "tableCell") {
		placePiece(e.target);
		if(checkForWin() !== '') {
			document.getElementById('result').textContent = checkForWin();
		} else if (gamePieces === 9) {
			document.getElementById('result').textContent = 'Tie Game!';
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
	var id = ele.id;
	var textContent = document.getElementById(id).textContent;
	if (!textContent) {
		var text = pickPiece(gamePieces);
		document.getElementById(id).textContent = text;
		gamePieces += 1;
	}
}

var checkForWin = function() {
	var winner = '';
	var tableCells = document.getElementsByClassName("tableCell");
	if (tableCells[0].textContent !== '') {
		if (tableCells[0].textContent === tableCells[1].textContent === tableCells[2].textContent) {
			winner = tableCells[0].textContent;
		} else if (tableCells[0].textContent === tableCells[3].textContent === tableCells[6].textContent) {
			winner = tableCells[0].textContent;
		} else if (tableCells[0].textContent === tableCells[4].textContent === tableCells[8].textContent) {
			winner = tableCells[0].textContent;
		} else if (tableCells[1].textContent === tableCells[4].textContent === tableCells[7].textContent) {
			winner = tableCells[1].textContent;
		} else if (tableCells[2].textContent === tableCells[5].textContent === tableCells[8].textContent) {
			winner = tableCells[2].textContent;
		} else if (tableCells[2].textContent === tableCells[4].textContent === tableCells[6].textContent) {
			winner = tableCells[2].textContent;
		} else if (tableCells[3].textContent === tableCells[4].textContent === tableCells[5].textContent) {
			winner = tableCells[3].textContent;
		} else if (tableCells[6].textContent === tableCells[7].textContent === tableCells[8].textContent) {
			winner = tableCells[6].textContent;
		}
		return winner;
	}
}
