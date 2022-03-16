
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var question16 = document.quiz.question16.value;
	var question17 = document.quiz.question17.value;
	var question18 = document.quiz.question18.value;
	var question19 = document.quiz.question19.value;
	var question20 = document.quiz.question20.value;
	var question21 = document.quiz.question21.value;
	var question22 = document.quiz.question22.value;

	var correct = 0;

	


	if (question1 == "34282") {
		correct++;
}
	if (question2 == "5250") {
		correct++;
}	
	if (question3 == "April 21,2014") {
		correct++;
}
	if (question4 == "April 20,2014") {
		correct ++;
}
	if (question5 == "5737") {
		correct ++;
}
	if (question6 == "April 21,2014") {
		correct ++; 
}
	if (question7 == "5224") {
		correct ++;
}
	if (question8 == "513") {
		correct ++;
}
	if (question9 == "www1/access.log") {
		correct ++;
}
	if (question10 == "www1/access.log") {
		correct ++;
}
	if (question11 == "128.241.220.82") {
		correct ++;
}	
	if (question12 == "29") {
		correct ++;
}
	if (question13 == "April 24,2014") {
		correct ++; 
}
	if (question14 == "7669") {
		correct ++; 
}
	if (question15 == "April 24,2014") {
		correct ++;
}
	if (question16 == "401") {
		correct ++;
}
	if (question17 == "1445") {
		correct ++;
}		
	if (question18 == "276") {
		correct ++;
}		
	if (question19 == "April 19,2014") {
		correct ++;
}		
	if (question20 == "33253") {
		correct ++;
}		
	if (question21 == "98") {
		correct ++;
}		
	if (question22 == "118.142.68.222") {
		correct ++;
	
	
}	
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct <= 8 ) {
		score = 2;
	}

	if (correct > 8 && correct <= 16) {
		score = 1;
	}

	if (correct > 16 ) {
		score = 0;
	}

	

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
