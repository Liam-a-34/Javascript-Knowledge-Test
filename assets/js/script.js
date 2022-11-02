var score = 0
var time = 75
var timer = document.querySelector(".timer")
var begin = document.querySelector(".begin")
var start = document.querySelector("#start")
var q1 = document.querySelector("#Q1");
var q2 = document.querySelector("#Q2");
var q3 = document.querySelector("#Q3");
var q4 = document.querySelector("#Q4")
var q5 = document.querySelector("#Q5")
var final = document.querySelector("#final")
var highscores = document.querySelector("#highscores")
var final_score_count = document.querySelector("#final_score")
var leaderboard = document.querySelector("#scores")
var back = document.querySelector("#go_back")
var clear_scores = document.querySelector("#clear")



function countdown_start() {
    time = 75;
    var countdown = setInterval(function(){
        timer.textContent= "Time: " + time;
        time--;
    }, 1000);

    score = 0;

    start_test();

    q5.addEventListener("click", function(event){
        clearInterval(countdown);

    })
}



function go_to_scores() {

    final.setAttribute("style", "display: none;")
    highscores.setAttribute("style", "display: block;")

    var lis = document.createElement("li");

    leaderboard.appendChild(lis);

    leaderboard.children[i].textContent = "";

    back.addEventListener("click", function(event){
        event.preventDefault();

        time = 75;

        highscores.setAttribute("style", "display: none");
    
        start.setAttribute("style", "display: flex;");
    })

    clear_scores.addEventListener("click", function(event){
        event.preventDefault();

        leaderboard.removeChild(lis);
        
    })

}

function final_score () {

    q5.setAttribute("style", "display: none;");

    final.setAttribute("style", "display: block;");

    final_score_count.textContent = ("Your final score is " + score + ".");
    setTimeout(() => {final.children[5].textContent = ""}, 1500);

    submit.addEventListener("click", function(event){
        event.preventDefault();

        var scores = []
        var user_score = (document.querySelector("#initials").value + ": " + score);
        localStorage.setItem("all_scores", scores)

        scores.push(user_score);

        //console.log(scores);
    
        console.log(user_score);

        //console.log(localStorage.getItem("all_scores"))

        go_to_scores();

    });

}

function fifth_q() {
    q4.setAttribute("style", "display: none;")

    q5.setAttribute("style", "display: flex;");
    setTimeout(() => {q5.children[5].textContent = ""}, 1500);
    q5.addEventListener("click", function(event){
        event.stopPropagation();
        var answer5 = event.target;

        if (answer5.matches(".correct5")) {
            score += 5;
            final.children[5].textContent = "Correct!"
            final_score();
        } else {
            time -= 10;
            final.children[5].textContent = "Incorrect.";
            final_score();
        }
    });   
}

function fourth_q() {
    q3.setAttribute("style", "display: none;")

    q4.setAttribute("style", "display: flex;");
    setTimeout(() => {q4.children[5].textContent = ""}, 1500);
    q4.addEventListener("click", function(event){ 
        event.stopPropagation();
        var answer4 = event.target;
    
        if (answer4.matches(".correct4")) {
            score += 5;
            q5.children[5].textContent = "Correct!"
            fifth_q();
        } else {
            time -= 10;
            q5.children[5].textContent = "Incorrect."
            fifth_q();
        }
    });   
}

function third_q() {
    q2.setAttribute("style", "display: none;")

    q3.setAttribute("style", "display: flex;");
    setTimeout(() => {q3.children[5].textContent = ""}, 1500);
    q3.addEventListener("click", function(event){
        event.stopPropagation();
        var answer3 = event.target;
    
        if (answer3.matches(".correct3")) {
            score += 5;
            q4.children[5].textContent = "Correct!"
            fourth_q();
        } else {
            time -= 10;
            q4.children[5].textContent = "Incorrect."
            fourth_q();
        }
    });   
}

function second_q() {
    q1.setAttribute("style", "display: none;")

    q2.setAttribute("style", "display: flex;");
    setTimeout(() => {q2.children[5].textContent = ""}, 1000);
    q2.addEventListener("click", function(event){
        event.stopPropagation();
        var answer2 = event.target;
    
        if (answer2.matches(".correct2")) {
            score += 5;
            q3.children[5].textContent = "Correct!";
            third_q();
        } else {
            time -= 10;
            q3.children[5].textContent = "Incorrect."
            third_q();
        }
    });   
}

function start_test() {

start.setAttribute("style", "display: none;")

q1.setAttribute("style", "display: flex;");


q1.addEventListener("click", function(event) {
    event.stopPropagation()
    var answer1 = event.target;

    if (answer1.matches(".correct1")) {
        score += 5; 
        q2.children[5].textContent = "Correct!"
        second_q();
    } else {
        time -= 10;
        q2.children[5].textContent = "Incorrect.";
        second_q();
    }
});

}


begin.addEventListener("click", countdown_start)
