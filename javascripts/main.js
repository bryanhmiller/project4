var winner = $("#lauren");
var contestant1 = $("#zoe");
var contestant2 = $("#callan");
var showWinner = $("#show-winner");
var whatHappened = $("#play-by-play");

showWinner.click(whoWon);

function whoWon() {
	contestant1.addClass("hidden");
	contestant2.addClass("hidden");
	showWinner.addClass("hidden");
	winner.addClass("winner");
	whatHappened.removeClass("hidden");
}
