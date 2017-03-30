$(".turn-sidebar-off").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
});
$(".turn-sidebar-on").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
});
var questions = [{
	question: "Melyik város az európai únió központja?",
	correct: "Brüsszel",
	unCorrect1: "Párizs",
	unCorrect2: "London",
	unCorrect3: "Berlin",
	reward: 34,
}];