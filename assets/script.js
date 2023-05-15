// variable gameON 

var gameOn = true
// quiz button

var startQuizButton = document.getElementById("startQuiz");
// header
var timer = document.getElementById("timeLeft");
var highScoreDiv = document.getElementById("userHighScore")
var score = 0;
var timeRemaining = 70;
var intial = document.getElementById("initialButton").value
// page containers
var content = document.querySelector("main");
var firstPageContent = document.getElementById("firstPageContainer")
var secondPageContent = document.getElementById("secondPageContainer");
var thirdPageContent = document.getElementById("thirdPageContainer");
var forthPageContent = document.getElementById("fourthPageContainer");
var fifthPageContent = document.getElementById("fifthPageContainer");
var sixthPageContent = document.getElementById("sixthPageContainer");
var seventhPageContent = document.getElementById("seventhPageContainer");
var lastPageContent = document.getElementById("lastPageContainer")

// setting all pages but the first one to none at the start/
secondPageContent.style.display = "none"
thirdPageContent.style.display = "none"
forthPageContent.style.display = "none"
fifthPageContent.style.display = "none"
sixthPageContent.style.display = "none"
seventhPageContent.style.display = "none"
lastPageContent.style.display = "none"


// buttons
var rightButton = document.querySelectorAll(".btn-group-1 .right-btn")
var wrongButton = document.querySelectorAll(".btn-group-1 .wrong-btn")
var rightButtonPage2 = document.querySelectorAll(".btn-group-2 .right-btn")
var wrongButtonPage2 = document.querySelectorAll(".btn-group-2 .wrong-btn")
var rightButtonPage3 = document.querySelectorAll(".btn-group-3 .right-btn")
var wrongButtonPage3 = document.querySelectorAll(".btn-group-3 .wrong-btn")
var rightButtonPage4 = document.querySelectorAll(".btn-group-4 .right-btn")
var wrongButtonPage4 = document.querySelectorAll(".btn-group-4 .wrong-btn")
var rightButtonPage5 = document.querySelectorAll(".btn-group-5 .right-btn")
var wrongButtonPage5 = document.querySelectorAll(".btn-group-5 .wrong-btn")
var goBackButton = document.getElementById("goBack")
var clearButton = document.getElementById("clearHighScores")

// footer 
var footer = document.querySelector("footer");
var footerRightAnswer = document.getElementById("wrongAnswer")
var footerWrongAnswer = document.getElementById("rightAnswer")
footer.hidden = true;



//FUNCTIONS
// function to that adds 1 to the score for every right answer


function addtoScore() {
    score = score + 1;




}
// making a function to hide content 
// function hideLastPage(){}

// function that hides the last section (question) content to none and displays current question
function rightAnswerPage2() {
    addtoScore();
    secondPageContent.style.display = "none"
    forthPageContent.style.display = "none"



    thirdPageContent.style.display = "block"
    footer.hidden = false
    footerWrongAnswer.hidden = false








}

function wrongAnswerPage2() {
    secondPageContent.style.display = "none"
    forthPageContent.style.display = "none"


    thirdPageContent.style.display = "block"

    footer.hidden = false
    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15;
    return timeRemaining;


}
function rightAnswerPage3() {
    addtoScore();


    thirdPageContent.style.display = "none"
    forthPageContent.style.display = "block"

    footer.hidden = false
    footerWrongAnswer.hidden = false
    footerRightAnswer.hidden = true







}
function wrongAnswerPage3() {


    thirdPageContent.style.display = "none"
    forthPageContent.style.display = "block"

    footerWrongAnswer.hidden = true
    footerRightAnswer.hidden = false
    timeRemaining = timeRemaining - 15;
    return timeRemaining;




}
function rightAnswerPage4() {
    addtoScore();


    forthPageContent.style.display = "none"
    fifthPageContent.style.display = "block"
    footerWrongAnswer.hidden = false
    footerRightAnswer.hidden = true






}
function wrongAnswerPage4() {



    forthPageContent.style.display = "none"
    fifthPageContent.style.display = "block"


    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15;
    return timeRemaining;



}

function rightAnswerPage5() {
    addtoScore();
    fifthPageContent.style.display = "none"
    sixthPageContent.style.display = "block"

    footerWrongAnswer.hidden = false
    footerRightAnswer.hidden = true


}
function wrongAnswerPage5() {




    fifthPageContent.style.display = "none"
    sixthPageContent.style.display = "block"

    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15;
    return timeRemaining;




}

function rightAnswerPage6() {

    addtoScore();
    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "block"
    footerWrongAnswer.hidden = false
    footerRightAnswer.hidden = true


    document.getElementById("finalScore").textContent = "your score is " + score;



}
function wrongAnswerPage6() {





    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "block"

    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15;



    document.getElementById("finalScore").textContent = "your score is " + score;
    return timeRemaining;


}

// Event Listeners for buttons that will run functions above
rightButton.forEach((item) => {
    item.addEventListener('click', rightAnswerPage2)
})
wrongButton.forEach((item) => {
    item.addEventListener('click', wrongAnswerPage2)
})
rightButtonPage2.forEach((item) => {
    item.addEventListener('click', rightAnswerPage3)
})
wrongButtonPage2.forEach((item) => {
    item.addEventListener('click', wrongAnswerPage3)
})
rightButtonPage3.forEach((item) => {
    item.addEventListener('click', rightAnswerPage4)
})
wrongButtonPage3.forEach((item) => {
    item.addEventListener('click', wrongAnswerPage4)
})
rightButtonPage4.forEach((item) => {
    item.addEventListener('click', rightAnswerPage5)
})
wrongButtonPage4.forEach((item) => {
    item.addEventListener('click', wrongAnswerPage5)
})
rightButtonPage5.forEach((item) => {
    item.addEventListener('click', rightAnswerPage6)
})
wrongButtonPage5.forEach((item) => {
    item.addEventListener('click', wrongAnswerPage6)
})

// creating a UL inside a div for the high scores and initals to be placed.
// creating variables for them.
var iDiv = document.createElement('div');
var list = document.createElement('ul');
var listElement = document.createElement('li');
var array = []
// this function will display the high score and keep the information with the use of local storage.
function setHighScore() {
    // setting last page (question) content to none and displaying current div.
    seventhPageContent.style.display = "none";
    footer.style.display = "none"
    lastPageContent.style.display = "block";

    // variable initial will store the value (initial) of the use from the initialButton .
    var initial = document.getElementById("initialButton").value

    // creating an object to store both the score and associated initial.
    var obj = {
        "score": score,
        initial
    }
    // pushing the values in obj into the empty array outside the function.
    array.push(obj)

    console.log(array)

    // setting localStorage .
    // stringifying the array and setting the key to "key".
    localStorage.setItem("key", JSON.stringify(array))

    // retrieving the strigified array and parsing it.
    // saving it to variable retArray.
    let retArray = JSON.parse(localStorage.getItem("key"))

    //creating a list element everytime this function is clicked.
    listElement = document.createElement('li');
    document.getElementById('userHighScoreList').appendChild(listElement);
    // for loop will iterate through localStorage array to return right index including the object with the user intial:score.
    for (var i = 0; i < JSON.parse(localStorage.getItem("key")).length; i++) {

        listElement.textContent = retArray[i].initial + ":" + " " + retArray[i].score




    }
    return





}



// function resets the page.

function resetPage() {
    score = 0;
    firstPageContent.style.display = 'block'
    secondPageContent.style.display = "none"
    thirdPageContent.style.display = "none"
    forthPageContent.style.display = "none"
    fifthPageContent.style.display = "none"
    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "none"
    lastPageContent.style.display = "none"
    footer.style.display = "none"
    footer.style.display = "block"
    timeRemaining = 70





}


// function to clear localStorage


function clear() {
    localStorage.clear();
    document.getElementById("userHighScoreList").textContent = ""

}


// function will return Users high scores unless it is cleared.
function viewHighScore() {
    firstPageContent.style.display = 'none'
    secondPageContent.style.display = "none"
    thirdPageContent.style.display = "none"
    forthPageContent.style.display = "none"
    fifthPageContent.style.display = "none"
    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "none"

    footer.style.display = "none"
    lastPageContent.style.display = "block";
    // returns locals storage.
    let retArray = JSON.parse(localStorage.getItem("key"))




    for (var i = 0; i < JSON.parse(localStorage.getItem("key")).length; i++) {

        listElement = document.createElement('li');
        document.getElementById('userHighScoreList').appendChild(listElement);
        listElement.textContent = ""
        listElement.textContent = retArray[i].initial + ":" + " " + retArray[i].score




    }





}


// function to start the Game

function startGame() {

    gameOn = true
    // timer function will start timer

    function startTimer() {

        var timerInterval = setInterval(() => {
            timeRemaining--;
            timer.textContent = "Time left:" + " " + timeRemaining;

            if (timeRemaining === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image

            }


        }, 1000);

    };

    // timer will start
    startTimer();
    // first question will display
    firstPageContent.style.display = "none"
    secondPageContent.style.display = "block"
    footerRightAnswer.hidden = true;
    footerWrongAnswer.hidden = true;



}
//If the timer runs out, alert GAME OVER, gameOn variable set to false

if (timeRemaining === 1 || timeRemaining > 0) {
    console.log(("Game Over"))

    gameOn = false
    secondPageContent.style.display = "none"
    thirdPageContent.style.display = "none"
    forthPageContent.style.display = "none"
    fifthPageContent.style.display = "none"
    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "none"
    lastPageContent.style.display = "none"

    firstPageContent.style.display = "block";


}


// event listener for 5 buttons.
startQuizButton.addEventListener('click', startGame);
submit.addEventListener('click', setHighScore)
console.log("the intials:" + intial)
goBackButton.addEventListener('click', resetPage)
clearButton.addEventListener('click', clear)
highScorelink.addEventListener('click', viewHighScore)
