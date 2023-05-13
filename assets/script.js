var gameOver = false
// quiz button

var startQuizButton = document.getElementById("startQuiz");
// header
var timer = document.getElementById("timeLeft");
var highScoreDiv = document.getElementById("userHighScore")
var score = 0;
var timeRemaining = 100;
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
var rightButtonPage2 =  document.querySelectorAll(".btn-group-2 .right-btn")
var wrongButtonPage2 =  document.querySelectorAll(".btn-group-2 .wrong-btn")
var rightButtonPage3 =  document.querySelectorAll(".btn-group-3 .right-btn")
var wrongButtonPage3 =  document.querySelectorAll(".btn-group-3 .wrong-btn")
var rightButtonPage4 =  document.querySelectorAll(".btn-group-4 .right-btn")
var wrongButtonPage4 =  document.querySelectorAll(".btn-group-4 .wrong-btn")
var rightButtonPage5 =  document.querySelectorAll(".btn-group-5 .right-btn")
var wrongButtonPage5 =  document.querySelectorAll(".btn-group-5 .wrong-btn")
var goBackButton = document.getElementById("goBack")
var clearButton = document.getElementById("clearHighScores")

// footer 
var footer = document.querySelector("footer");
var footerRightAnswer = document.getElementById("wrongAnswer")
var footerWrongAnswer = document.getElementById("rightAnswer")
footer.hidden = true;
//game over

if (timeRemaining === 0){
    alert("Game Over")
    gameOver === true
    
    
}
if (gameOver === true){
secondPageContent.style.display = "none"
thirdPageContent.style.display = "none"
forthPageContent.style.display = "none"
fifthPageContent.style.display = "none"
sixthPageContent.style.display = "none"
seventhPageContent.style.display = "none"
lastPageContent.style.display = "none"
    
}


function addtoScore() {
    score = score + 1;
    



}
// making a function to hide content 
// function hideContent {


// }

//FUNCTIONS


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
function wrongAnswerPage3(){
    

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
function wrongAnswerPage4(){
    
    
    
    forthPageContent.style.display = "none"
    fifthPageContent.style.display ="block"

    
    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15; 
    return timeRemaining;

   

}

function rightAnswerPage5(){
    addtoScore();
    fifthPageContent.style.display = "none"
    sixthPageContent.style.display = "block"

    footerWrongAnswer.hidden = false
    footerRightAnswer.hidden = true
    
  
}
function wrongAnswerPage5(){
    
    
    
   
    fifthPageContent.style.display ="none"
    sixthPageContent.style.display = "block"

    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15; 
    return timeRemaining;

    

   
}

function rightAnswerPage6(){

    addtoScore();
    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "block"
    footerWrongAnswer.hidden = false
    footerRightAnswer.hidden = true
    
   
    document.getElementById("finalScore").textContent = "your score is " + score ;
    

    
}
function wrongAnswerPage6(){
    
    
    
   
   
    sixthPageContent.style.display = "none"
    seventhPageContent.style.display = "block"

    footerRightAnswer.hidden = false
    footerWrongAnswer.hidden = true
    timeRemaining = timeRemaining - 15; 
    


document.getElementById("finalScore").textContent = "your score is " + score ;
return timeRemaining;

   
}

// Event Listeners for buttons
rightButton.forEach((item) =>{
    item.addEventListener('click',rightAnswerPage2)
})
wrongButton.forEach((item) =>{
    item.addEventListener('click',wrongAnswerPage2)
})
rightButtonPage2.forEach((item) =>{
    item.addEventListener('click',rightAnswerPage3)
})
wrongButtonPage2.forEach((item) =>{
    item.addEventListener('click',wrongAnswerPage3)
})
rightButtonPage3.forEach((item) =>{
    item.addEventListener('click',rightAnswerPage4)
})
wrongButtonPage3.forEach((item) =>{
    item.addEventListener('click',wrongAnswerPage4)
})
rightButtonPage4.forEach((item) =>{
    item.addEventListener('click',rightAnswerPage5)
})
wrongButtonPage4.forEach((item) =>{
    item.addEventListener('click',wrongAnswerPage5)
})
rightButtonPage5.forEach((item) =>{
    item.addEventListener('click',rightAnswerPage6)
})
wrongButtonPage5.forEach((item) =>{
    item.addEventListener('click',wrongAnswerPage6)
})



//function for local storage; 
function setHighScore(){
seventhPageContent.style.display="none";
footer.style.display="none"
lastPageContent.style.display ="block";
var newname = document.getElementById("initialButton").value

const initialScore = {"newname":newname, "score":score};
const myJSON = JSON.stringify(initialScore)
localStorage.setItem("score",myJSON);
localScore = localStorage.getItem("score");
var obj = JSON.parse(localScore)

var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
iDiv.textContent = obj.newname + ": "+ obj.score;
document.getElementById('userHighScore').appendChild(iDiv);




}



function resetPage(){
    score = 0;
    firstPageContent.style.display = 'block'
    secondPageContent.style.display = "none"
thirdPageContent.style.display = "none"
forthPageContent.style.display = "none"
fifthPageContent.style.display = "none"
sixthPageContent.style.display = "none"
seventhPageContent.style.display = "none"
lastPageContent.style.display = "none"
footer.style.display = "block"
timeRemaining = 100
return timeRemaining

}



   

function clear(){
    localStorage.clear();
document.getElementById("userHighScore").textContent = ""

}



function viewHighScore(){
    firstPageContent.style.display = 'none'
    secondPageContent.style.display = "none"
thirdPageContent.style.display = "none"
forthPageContent.style.display = "none"
fifthPageContent.style.display = "none"
sixthPageContent.style.display = "none"
seventhPageContent.style.display = "none"

footer.style.display="none"
lastPageContent.style.display ="block";
}

// function 
// function to start game



function startGame() {

    // timer function

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
    startTimer();
    firstPageContent.style.display = "none"
    secondPageContent.style.display = "block"
    footerRightAnswer.hidden = true;
    footerWrongAnswer.hidden = true;



}

// event listener for Start Quiz button which starts game.
startQuizButton.addEventListener('click', startGame);
submit.addEventListener('click', setHighScore)
console.log("the intials:" + intial)
goBackButton.addEventListener('click',resetPage)
clearButton.addEventListener('click',clear)
highScorelink.addEventListener('click',viewHighScore)