console.log('work?');

var move = function(elementId) {
	console.log(`${elementId}`);
	document.getElementById(`${elementId}`).style.color = "red";
};

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
	if (e.target.className === "tableCell")
	console.log(e.target);
	var id = e.target.id;
	console.log('text content: ', document.getElementById(id).textContent);
	var textContent = document.getElementById(id).textContent;
	if (!textContent) {
		var text = document.createTextNode(placePiece(gamePieces));
		document.getElementById(id).appendChild(text);
	}
});
