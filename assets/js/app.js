$(".sidebar-off").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".sidebar-on").toggleClass("sidebar-on-hidden");
});
$(".sidebar-on").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".sidebar-on").toggleClass("sidebar-on-hidden");
});
$(".question").click(function() {
	if (!$(".sidebar").hasClass("sidebar-hidden")) {
		$(".sidebar").toggleClass("sidebar-hidden");
		$(".sidebar-on").toggleClass("sidebar-on-hidden");
	}
});
var questions = [{
	question: "Melyik város az Európai Unió központja?",
	correct: "Brüsszel",
	inCorrect1: "Párizs",
	inCorrect2: "London",
	inCorrect3: "Berlin",
	reward: 30
}, {
	question: "Hány nemzet vezetője írta alá az első Európai Uniót alapító szerződést?",
	correct: "6",
	inCorrect1: "4",
	inCorrect2: "5",
	inCorrect3: "3"
}];
var checkAnswer = function(answer, seriel) {
	return questions[seriel].correct === answer;
};
var seriel;
var icons;
var displayQuestion = function(nth) {
	seriel = nth;
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
var user = function(color, position1, position2) {
	return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 50 50" class="'+position1+' '+position2+' user-'+color+'"><path d="M 24.71875 2 C 24.088106 2 23.472136 2.0161627 22.875 2.0625 C 22.799605 2.0682281 22.731089 2.0873098 22.65625 2.09375 C 22.131877 2.1388741 21.621792 2.201458 21.125 2.28125 C 20.592524 2.3667735 20.062678 2.4690071 19.5625 2.59375 C 19.540978 2.5992195 19.521463 2.6194576 19.5 2.625 C 18.443876 2.8929627 17.469196 3.2481563 16.5625 3.6875 C 15.648097 4.130578 14.818776 4.6699669 14.0625 5.28125 C 13.687309 5.5845097 13.335137 5.90647 13 6.25 C 11.673671 7.609546 10.669713 9.2575208 10 11.21875 C 9.8385653 11.691505 9.6840971 12.181456 9.5625 12.6875 C 9.4538266 13.13976 9.357609 13.615392 9.28125 14.09375 C 9.2308413 14.402241 9.1926558 14.713912 9.15625 15.03125 C 9.1278612 15.284884 9.0822281 15.52093 9.0625 15.78125 C 9.0164753 16.370886 9 16.977256 9 17.59375 C 9 18.099793 9.0880157 18.744795 9.1875 19.4375 C 9.2948459 20.184946 9.4459677 20.99196 9.625 21.8125 C 9.7849312 22.545496 9.9424771 23.259276 10.125 23.9375 C 10.145416 24.017028 10.167101 24.109766 10.1875 24.1875 C 10.311878 24.638049 10.442331 25.091314 10.5625 25.46875 C 10.270073 25.717987 9.972145 25.879295 9.6875 26.3125 C 9.2062296 27.044951 8.8546522 28.075801 9 29.3125 C 9.4211254 32.885802 11.663233 34.163454 12.40625 34.53125 C 12.692645 36.202283 13.554288 38.264895 14.96875 40.375 C 16.484034 42.635511 18.577949 44.808067 21.125 46.03125 C 21.17201 46.05383 21.20266 46.1031 21.25 46.125 C 22.16755 47.2208 23.46514 48 25 48 C 26.53596 48 27.832258 47.221878 28.75 46.125 C 28.79718 46.10306 28.82815 46.05387 28.875 46.03125 C 31.41364 44.80575 33.46649 42.63508 34.96875 40.375 C 36.368937 38.268484 37.213781 36.196765 37.5 34.53125 C 38.233699 34.181967 40.54379 32.941357 40.96875 29.34375 C 41.114655 28.102936 40.7355 27.051622 40.25 26.3125 C 39.962853 25.87535 39.669663 25.721729 39.375 25.46875 C 39.538894 24.947816 39.732769 24.361736 39.90625 23.71875 C 39.916907 23.67838 39.926998 23.634052 39.9375 23.59375 C 39.95551 23.526031 39.982083 23.443888 40 23.375 C 40.17867 22.673103 40.306271 21.992605 40.4375 21.3125 C 40.58893 20.527704 40.724682 19.753592 40.8125 19 C 40.837977 18.781375 40.854903 18.559622 40.875 18.34375 C 40.912264 17.949181 40.949295 17.562146 40.96875 17.15625 C 40.987463 16.76484 41 16.38125 41 16 C 41 15.729422 40.987659 15.42282 40.96875 15.125 C 40.966164 15.083782 40.971704 15.041219 40.96875 15 C 40.950797 14.753061 40.908155 14.510241 40.875 14.25 C 40.856582 14.104567 40.83559 13.957233 40.8125 13.8125 C 40.789342 13.666939 40.778482 13.523 40.75 13.375 C 40.727552 13.258889 40.713031 13.146526 40.6875 13.03125 C 40.651407 12.867348 40.605698 12.696666 40.5625 12.53125 C 40.534868 12.426842 40.499008 12.322126 40.46875 12.21875 C 40.417793 12.042262 40.372282 11.864108 40.3125 11.6875 C 40.279543 11.591359 40.254096 11.501163 40.21875 11.40625 C 40.157294 11.238867 40.070103 11.072356 40 10.90625 C 39.888403 10.641826 39.759927 10.383324 39.625 10.125 C 39.57064 10.020924 39.527095 9.915185 39.46875 9.8125 C 39.389292 9.6726584 39.276223 9.5422425 39.1875 9.40625 C 39.120822 9.3039779 39.070496 9.1927092 39 9.09375 C 38.907929 8.9659055 38.819348 8.8417308 38.71875 8.71875 C 38.641541 8.6221353 38.550002 8.5301541 38.46875 8.4375 C 38.367109 8.3253112 38.265455 8.2004356 38.15625 8.09375 C 38.054525 7.990616 37.951158 7.909422 37.84375 7.8125 C 37.62934 7.6190226 37.393494 7.4478378 37.15625 7.28125 C 36.161024 6.5824217 34.97103 6.1268091 33.5625 6.03125 C 33.290313 5.6281083 32.858183 5.117185 32.28125 4.59375 C 32.054314 4.3878577 31.812786 4.1718673 31.53125 3.96875 C 31.501257 3.947111 31.468139 3.9277817 31.4375 3.90625 C 31.407612 3.8850619 31.374129 3.8647321 31.34375 3.84375 C 31.068131 3.6551646 30.765579 3.4860704 30.4375 3.3125 C 29.429794 2.7793719 28.194375 2.3248253 26.625 2.125 C 26.553592 2.1159077 26.47893 2.1018393 26.40625 2.09375 C 26.347193 2.0869291 26.278543 2.0998638 26.21875 2.09375 C 25.746102 2.0474804 25.245391 2 24.71875 2 z M 32.5 14.375 C 33.472 15.924 35 18.865 35 22 C 35.018049 23.668103 35.664712 26.445992 37.90625 26.71875 C 38.103794 26.867438 38.371723 27.099488 38.59375 27.4375 C 38.873 27.862628 39.056845 28.375814 38.96875 29.125 C 38.587869 32.349448 36.34375 32.96875 36.34375 32.96875 A 1.0001 1.0001 0 0 0 35.65625 33.8125 C 35.540298 34.917365 34.701514 37.160293 33.3125 39.25 C 31.923486 41.339707 30.011565 43.333388 27.90625 44.3125 A 1.0001 1.0001 0 0 0 27.5 44.65625 C 26.960493 45.461753 26.047658 46 25 46 C 23.953105 46 23.039513 45.461011 22.5 44.65625 A 1.0001 1.0001 0 0 0 22.09375 44.3125 C 19.978756 43.333974 18.057749 41.340767 16.65625 39.25 C 15.254751 37.159233 14.396285 34.91272 14.28125 33.8125 A 1.0001 1.0001 0 0 0 13.625 33 C 13.625 33 11.380566 32.322903 11 29.09375 C 10.91135 28.339449 11.10327 27.819799 11.375 27.40625 C 11.488734 27.233156 11.624918 27.093917 11.75 26.96875 C 11.828226 26.988149 11.91828 27 12 27 C 13.972 27 14.656 23.716 15 22 C 15.626 18.878 19.061 18 24 18 C 28.652 18 31.266 15.839 32.5 14.375 z M 19.5 27 C 18.671573 27 18 27.671573 18 28.5 C 18 29.328427 18.671573 30 19.5 30 C 20.328427 30 21 29.328427 21 28.5 C 21 27.671573 20.328427 27 19.5 27 z M 30.5 27 C 29.671573 27 29 27.671573 29 28.5 C 29 29.328427 29.671573 30 30.5 30 C 31.328427 30 32 29.328427 32 28.5 C 32 27.671573 31.328427 27 30.5 27 z"></path></svg>';
};
var displayIcons = function() {
	for (var i = 0; i < icons.length; i++) {
		if (i === 1) {
			$('.statusbar').append(user(icons[i], 'statusbar-img-main', 'statusbar-img'));
		}
		else if (i >= 3) {
			$('.sidebar-item-container').append(user(icons[i], 'sidebar-img'));
		}
		else {
			$('.statusbar').append(user(icons[i],'statusbar-img'));
		}
	}
};
var generateIcons = function(playtime, players) {
	var count = playtime / 2;
	icons = [];
	for (var i = 1; i <= count; i++) {
		if (i % 8 === 0 && players === 8) {
			icons.push("cyan");
		}
		else if (i % 7 === 0 && players >= 7) {
			icons.push("violet");
		}
		else if (i % 6 === 0 && players >= 6) {
			icons.push("orange");
		}
		else if (i % 5 === 0 && players >= 5) {
			icons.push("black");
		}
		else if (i % 4 === 0 && players >= 4) {
			icons.push("gold");
		}
		else if (i % 3 === 0 && players >= 3) {
			icons.push("red");
		}
		else if (i % 2 === 0 && players >= 2) {
			icons.push("blue");
		}
		else {
			icons.push("green");
		}
	}
};
$('.answer').click(function() {
	var answer = $(this).text();
	if (checkAnswer(answer, seriel)) {
		$(this).append('<img src="assets/images/tick.png" class="response tick">');
		$('.jumbotron').text(questions[seriel].reward);
		$('.question').remove();
	}
	else {
		$(this).append('<img src="assets/images/x.png" class="response x">');
		$('.answer:contains('+questions[seriel].correct+')').append('<img src="assets/images/tick.png" class="response tick">');
		$('.question').remove();
		$('.display').append('<img src="assets/images/emoji_sad.png" class="emoji">');
	}
});
generateIcons(60,4);
displayIcons();
displayQuestion(0);