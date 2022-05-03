var questionIndex = 0;
var questions = document.getElementsByClassName('question');

function examine() {

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
  



  //Feedback dependent on user score
  var images = ['img/maximum.gif', 'img/average.gif', 'img/minimum.gif'];
  var notes = ['Look at those skills!', "That's not bad", 'You can do better'];

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

  document.getElementById('submission').style.visibility = 'visible';

  document.getElementById('note').innerHTML = notes[result];
  document.getElementById('number_points').innerHTML = 'You have earned ' + points + ' point(s).';
  const username = document.getElementById('username').innerHTML = question_0;

  document.getElementById('picture').src = images[result];
  save(points,username);
}

function save(points, username) {
    localStorage.setItem(points, username);
    const tbody = document.querySelector('#dtable tbody');
    tbody.appendChild(createRow(username, points));
}

function createRow(username, points) {
    const tr = document.createElement('tr');
    tr.appendChild(createTd(username));
    tr.appendChild(createTd(points));
    return tr;
    return localStorage.getItem(username, points) || " ";
}

function createTd(value) {
    const td = document.createElement('td');
    td.innerText = value;
    return td;
}


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

function nextQuestion() {
	if (questionIndex === questions.length - 1) {
    console.log('This is the last question');
	} else {
    questionIndex += 1;
    showQuestionAtIndex();
  }   
}

function previousQuestion() {
	if (questionIndex === 0) {
    console.log('This is the first question');
	} else {
    questionIndex -= 1;
    showQuestionAtIndex();
  }
}

