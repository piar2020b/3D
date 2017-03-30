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
var display = function(nth) {
	$('.question').text(questions[nth].question);
	switch (Math.floor(Math.random() * 4) + 1) {
		case 1:
			$('#first-answer').text(questions[nth].correct);
			$('#second-answer').text(questions[nth].unCorrect1);
			$('#third-answer').text(questions[nth].unCorrect2);
			$('#fourth-answer').text(questions[nth].unCorrect3);
			break;
		case 2:
			$('#second-answer').text(questions[nth].correct);
			$('#first-answer').text(questions[nth].unCorrect1);
			$('#third-answer').text(questions[nth].unCorrect2);
			$('#fourth-answer').text(questions[nth].unCorrect3);
			break;
		case 3:
			$('#third-answer').text(questions[nth].correct);
			$('#second-answer').text(questions[nth].unCorrect1);
			$('#first-answer').text(questions[nth].unCorrect2);
			$('#fourth-answer').text(questions[nth].unCorrect3);
			break;
		case 4:
			$('#fourth-answer').text(questions[nth].correct);
			$('#second-answer').text(questions[nth].unCorrect1);
			$('#third-answer').text(questions[nth].unCorrect2);
			$('#first-answer').text(questions[nth].unCorrect3);
			break;
	}
};