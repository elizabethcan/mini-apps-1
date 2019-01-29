var gamePieces = 0;

var placePiece = function(gamePieces) {
	console.log(gamePieces);
	var piece;
	if (gamePieces % 2 === 0) {
		piece = 'X';
	} else {
		piece = 'O';
	}
	gamePieces += 1;
	return piece;
}

document.addEventListener("click", function(e) {
	if (e.target.className === "tableCell") {
		console.log(e.target);
		var id = e.target.id;
		console.log('text content: ', document.getElementById(id).textContent);
		var textContent = document.getElementById(id).textContent;
		if (!textContent) {
			var text = placePiece(gamePieces);
			document.getElementById(id).textContent = text;
		}
	} else if (e.target.id === "resetBtn") {
		var tableCells = document.getElementsByClassName("tableCell");
		for (var i = 0; i < tableCells.length; i++) {
			tableCells[i].textContent = '';
		}
	}
});
