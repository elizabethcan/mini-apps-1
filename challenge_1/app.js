console.log('work?');

var move = function(elementId) {
	console.log(`${elementId}`);
	document.getElementById(`${elementId}`).style.color = "red";
};

document.addEventListener("click", function(e) {
	if (e.target.className === "tableCell")
	alert(e.target.id);
});
