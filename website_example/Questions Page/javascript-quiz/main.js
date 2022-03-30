

var questionIndex = 0;
var questions = document.getElementsByClassName('question');

function examine()
{
    //Define each question

	var question_0 = document.quiz.question_0.value;
	var question_1 = document.quiz.question_1.value;
	var question_2 = document.quiz.question_2.value;
	var question_3 = document.quiz.question_3.value;
	var question_4 = document.quiz.question_4.value;
	var question_5 = document.quiz.question_5.value;
	var question_6 = document.quiz.question_6.value;
	var question_7 = document.quiz.question_7.value;
	var question_8 = document.quiz.question_8.value;
	var question_9 = document.quiz.question_9.value;
	var question_10 = document.quiz.question_10.value;
	var question_11 = document.quiz.question_11.value;
	var question_12 = document.quiz.question_12.value;
	var question_13 = document.quiz.question_13.value;
	var question_14 = document.quiz.question_14.value;
	var question_15 = document.quiz.question_15.value;
	var question_16 = document.quiz.question_16.value;
	var question_17 = document.quiz.question_17.value;
	var question_18 = document.quiz.question_18.value;
	var question_19 = document.quiz.question_19.value;
	var question_20 = document.quiz.question_20.value;
	var question_21 = document.quiz.question_21.value;
	var question_22 = document.quiz.question_22.value;

    // User points start at 0
	var points = 0;

    // Add point if question correct
	if (question_1 == "34282") {
		points++;
}
	if (question_2 == "5250") {
		points++;
}	
	if (question_3 == "April 21,2014") {
		points++;
}
	if (question_4 == "April 20,2014") {
		points ++;
}
	if (question_5 == "5737") {
		points ++;
}
	if (question_6 == "April 21,2014") {
		points ++; 
}
	if (question_7 == "5224") {
		points ++;
}
	if (question_8 == "513") {
		points ++;
}
	if (question_9 == "www1/access.log") {
		points ++;
}
	if (question_10 == "www1/access.log") {
		points ++;
}
	if (question_11 == "128.241.220.82") {
		points ++;
}	
	if (question_12 == "29") {
		points ++;
}
	if (question_13 == "April 24,2014") {
		points ++; 
}
	if (question_14 == "7669") {
		points ++; 
}
	if (question_15 == "April 24,2014") {
		points ++;
}
	if (question_16 == "401") {
		points ++;
}
	if (question_17 == "1445") {
		points ++;
}		
	if (question_18 == "276") {
		points ++;
}		
	if (question_19 == "April 19,2014") {
		points ++;
}		
	if (question_20 == "33253") {
		points ++;
}		
	if (question_21 == "98") {
		points ++;
}		
    if (question_22 == "118.142.68.222") {
        points++;
}

	//Feedback dependent on user score 
	var images = ["img/maximum.gif", "img/average.gif", "img/minimum.gif"];
	var notes = ["Look at those skills!", "That's not bad", "You can do better"];
	
	var result;


	if (points <= 8 ) {
		result = 2;
	}

	if (points > 8 && points <= 16) {
		result = 1;
	}

	if (points > 16 ) {
		result = 0;
	}

	

	document.getElementById("submission").style.visibility = "visible";

	document.getElementById("note").innerHTML = notes[result];
	document.getElementById("number_points").innerHTML =   "You have earned " + points + " point(s).";
	document.getElementById("name").innerHTML = question_0 ;

    document.getElementById("picture").src = images[result];

    //export data gathered from quiz to JSON file for Leaderboard page
  
    //     var userdata = new Array(name, points);
    //     let csvContent = "data:text/csv;charset=utf-8,";

    //     rows.forEach(function (rowArray) {
    //         let row = rowArray.join(",");
    //         csvContent += row + "\r\n";
    // });
    // let csvContent = "data:text/csv;charset=utf-8,";

    // rows.forEach(function (rowArray) {
    //     let row = rowArray.join(",");
    //     csvContent += row + "\r\n";
    // });
}



