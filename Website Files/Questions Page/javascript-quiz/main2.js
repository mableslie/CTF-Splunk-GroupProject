//EDINBURGH NAPIER UNIVERSITY
// AUTHORS:
////ROBERT KISTER, MAB LESLIE, ANDREEA OCTAVIA CONSTANTIN, SERGIO RODRIGUEZ CHAVEZ, CHRISTOPHER MCGRAIL AND CALUM RAE
//THIS SCRIPT IS IN PARTIAL FULTILMENT OF SOC09115 GROUP PROJECT
//VERSION 1.0.0

//The purpose of this script is to run the main game engine for the 'questions' page
//The corresponding difficulty challenge pages, CSS and HTML files are included in the same directory 

//The questions in this script associate with 'Challenge 2' 

//Declare index of questions list
//Retrieve content of questions from HTML file using the 'question' class
var questionIndex = 0;
var questions = document.getElementsByClassName('question');

//Main script function, handles assigning answers to questions, the result after submit is clicked and saving the data for future use in leaderboard
function examine() {


  //Append variable for each answer to its corresponding question
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
    
  // User points start at 0
  var points = 0;

  // Add point if question correct
  if (question_1 == '401') {
    points++;
  }
  if (question_2 == '1445') {
    points++;
  }
  if (question_3 == '276') {
    points++;
  }
  if (question_4 == 'April 19,2014') {
    points++;
  }
  if (question_5 == '33253') {
    points++;
  }
  if (question_6 == '98') {
    points++;
  }
  if (question_7 == '118.142.68.222') {
    points++;
  }
  if (question_8 == '404') {
    points++;
  }
  if (question_9 == '48442') {
    points++;
  }
  if (question_10 == '1.79') {
    points++;
  }
  if (question_11 == '0') {
    points++;
  }
  if (question_12 == '0') {
    points++;
  }
  if (question_13 == '16') {
    points++;
  }
  if (question_14 == '9:17') {
    points++;
  }
  if (question_15 == 'None of the above') {
    points++;
    }

  //Depending on the users score, feedback and a funny GIF is displayed after submit is clicked
  var images = ['img/maximum.gif', 'img/average.gif', 'img/minimum.gif'];
  var notes = ['Look at those skills!', "That's not bad", 'You can do better'];

  //Create variable to store integer result that will display points, feedback and GIF
  var result;

  if (points <= 7) {
    result = 2;
  }

  if (points > 7 && points <= 11) {
    result = 1;
  }

  if (points > 11) {
    result = 0;
  }

    //Display elements to HTML file
  document.getElementById('submission').style.visibility = 'visible';
  document.getElementById('note').innerHTML = notes[result];
    document.getElementById('number_points').innerHTML = 'You have earned ' + points + ' point(s).';
    //Get username from user entry before quiz starts 
    const username = document.getElementById('username').innerHTML = question_0;
    document.getElementById('picture').src = images[result];
    //Call method save(), passing variables points and username
  save(points,username);
}

//The purpose of this function is to save the username and points collected in examine() in local storage for the leaderboard in local storage
function save(points, username) {
    localStorage.setItem(points, username);
    //creates a table appending username and score to a new row
    const tbody = document.querySelector('#dtable tbody');
    tbody.appendChild(createRow(username, points));
}

//The purpose of thiss function is to display the value created in the table row in save() method
function createRow(username, points) {
    const tr = document.createElement('tr');
    tr.appendChild(createTd(username));
    tr.appendChild(createTd(points));
    return tr;
    return localStorage.getItem(username, points) || " ";
}

//The purpose of this function creates a new element in the HTML file to display what was created in the above functions
function createTd(value) {
    const td = document.createElement('td');
    td.innerText = value;
    return td;
}


//The purpose of this function is to show all questions in the correct order 
function showQuestionAtIndex() {
  for (let index = 0; index < questions.length; index++) {
    if (index === questionIndex) {
      questions[index].classList.add('show-question');
      questions[index].classList.remove('hide-question');
    } else {
      questions[index].classList.add('hide-question');
      questions[index].classList.remove('show-question');
    }
	
  }
  
}

//The purpose of this function is to move from one question to the next
function nextQuestion() {
	if (questionIndex === questions.length - 1) {
    console.log('This is the last question');
	} else {
        questionIndex += 1;
         //shows the questions in correct order
    showQuestionAtIndex();
  }   
}
//The purpose of this function is to move from one question to the previous one
function previousQuestion() {
	if (questionIndex === 0) {
    console.log('This is the first question');
	} else {
        questionIndex -= 1;

         //shows the questions in correct order
    showQuestionAtIndex();
  }
}

