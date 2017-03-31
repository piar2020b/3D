$(".turn-sidebar-off").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
});
$(".turn-sidebar-on").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
});
var questions = [{
	question: "Melyik város az Európai Unió központja?",
	correct: "Brüsszel",
	inCorrect1: "Párizs",
	inCorrect2: "London",
	inCorrect3: "Berlin",
	reward: 34,
}];
var displayQuestion = function(nth) {
	$('.question').text(questions[nth].question);
	switch (Math.floor(Math.random() * 4) + 1) {
		case 1:
			$('#first-answer').text(questions[nth].correct);
			$('#second-answer').text(questions[nth].inCorrect1);
			$('#third-answer').text(questions[nth].inCorrect2);
			$('#fourth-answer').text(questions[nth].inCorrect3);
			break;
		case 2:
			$('#second-answer').text(questions[nth].correct);
			$('#first-answer').text(questions[nth].inCorrect1);
			$('#third-answer').text(questions[nth].inCorrect2);
			$('#fourth-answer').text(questions[nth].inCorrect3);
			break;
		case 3:
			$('#third-answer').text(questions[nth].correct);
			$('#second-answer').text(questions[nth].inCorrect1);
			$('#first-answer').text(questions[nth].inCorrect2);
			$('#fourth-answer').text(questions[nth].inCorrect3);
			break;
		case 4:
			$('#fourth-answer').text(questions[nth].correct);
			$('#second-answer').text(questions[nth].inCorrect1);
			$('#third-answer').text(questions[nth].inCorrect2);
			$('#first-answer').text(questions[nth].inCorrect3);
			break;
	}
};
var icons = ["red","blue","green","red","blue","green","red","blue","green","red","blue","green","red","blue","green","red","blue","green"];
var displayIcons = function() {
	for (var i = 0; i < 3; i++) {
		if (i === 1) {
			$('.statusbar').append('<div id="'+i+'-statusbar" class="statusbar-item"><img class="statusbar-image statusbar-image-main" src="assets/images/'+icons[i]+'.png" alt="face"></div>');
		}
		else {
			$('.statusbar').append('<div id="'+i+'-statusbar" class="statusbar-item"><img class="statusbar-image" src="assets/images/'+icons[i]+'.png" alt="'+icons[i]+'"></div>');
		}
	}
	for (var j = 3; j<icons.length; i++) {
		$('.sidebar-item-container').append('<div id="'+(j-2)+'-sidebar" class="sidebar-item"><img src="assets/images/'+icons[j]+'.png" alt="'+icons[j]+'" class="sidebar-img"></div>');
	}
};