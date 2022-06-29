

loadPage();
var secondsLeft = 101;
var score = 0;


function loadPage(){
    var loadDiv = document.createElement("div")
    loadDiv.setAttribute("class", "load-page")

    var divHead = document.createElement("h1")
    divHead.setAttribute("class", "load-page")
    divHead.innerHTML = "Do you Want to Play a Game?"

    var divBtn = document.createElement("button")
    divBtn.setAttribute("type", "button")
    divBtn.setAttribute("class", "load-page")
    divBtn.setAttribute("id", "divBtn")
    divBtn.innerHTML = "Start Game"

    loadDiv.appendChild(divHead)
    loadDiv.appendChild(divBtn)

    document.body.appendChild(loadDiv)

    document.getElementById("divBtn").addEventListener("click", clearLoad)
    
}



function gameTime(){
    var timerDiv = document.createElement("div")
        timerDiv.setAttribute("class", "timerdiv")
        var timerlocation = document.createElement("h1")

        timerDiv.appendChild(timerlocation)
        document.body.appendChild(timerDiv)

    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerlocation.innerHTML = secondsLeft
    
        if (secondsLeft === 0){
            clearInterval(timerInterval)
        }
    }, 1000);
    
}

function clearLoad(){
    this.parentNode.style.display='none';
    gameTime();
    loadFirstQuestion();
}

function clearLoad2(){
    this.parentNode.style.display='none';
    loadSecondQuestion();
}

function loadFirstQuestion(){

    var loadDiv = document.createElement("div")
    loadDiv.setAttribute("class", "question-one")

    var loadHead = document.createElement("h2")
    loadHead.innerHTML = "Question 1"

    var loadQuestion = document.createElement("p")
    loadQuestion.innerHTML = "What notation is used commonly when formatting javascript?"

    var loadForm = document.createElement("form")

    var loadLabel = document.createElement("label")
    loadLabel.setAttribute("for", "q1")
    loadLabel.innerHTML = "Dot Notation"

    var loadInput = document.createElement("input")
    loadInput.setAttribute("id", "q1")
    loadInput.setAttribute("type", "radio")
    loadInput.setAttribute("name", "question1")

    var loadLabel2 = document.createElement("label")
    loadLabel2.setAttribute("for", "q2")
    loadLabel2.innerHTML = "Scientific Notation"

    var loadInput2 = document.createElement("input")
    loadInput2.setAttribute("id", "q2")
    loadInput2.setAttribute("type", "radio")
    loadInput2.setAttribute("name", "question1")

    var submitBtn = document.createElement("button")
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("id", "submit")
    submitBtn.innerHTML = "Submit"

    loadDiv.appendChild(loadHead)
    loadDiv.appendChild(loadQuestion)
    loadDiv.appendChild(loadForm)
    loadDiv.appendChild(loadLabel)
    loadDiv.appendChild(loadInput)
    loadDiv.appendChild(loadLabel2)
    loadDiv.appendChild(loadInput2)
    loadDiv.appendChild(submitBtn)

    document.body.appendChild(loadDiv)
    
    

    
    
    document.getElementById('submit').addEventListener("click", function(){

        if (document.getElementById("q1").checked == true){
            score++;
            return score;
            
        }
        if (document.getElementById("q2").checked == true){
            secondsLeft -= 10;
            return score;
        }
        
    })

    document.getElementById('submit').addEventListener("click", clearLoad2)
    return score;
}

function loadSecondQuestion(){
    
}





