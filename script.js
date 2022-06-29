

loadPage();
var secondsLeft = 10;


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
    
        if (secondsLeft <= 0){
            clearInterval(timerInterval)
            document.body.style.display="none"
            alert("You are out of time")
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

function clearLoad3(){
    this.parentNode.style.display='none';
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

        if (document.getElementById("q2").checked == true){
            secondsLeft -= 10;
            
        }
        
    })

    document.getElementById('submit').addEventListener("click", clearLoad2)
}

function loadSecondQuestion(){
    var loadDiv = document.createElement("div")
    loadDiv.setAttribute("class", "question-one")

    var loadHead = document.createElement("h2")
    loadHead.innerHTML = "Question 2"

    var loadQuestion = document.createElement("p")
    loadQuestion.innerHTML = "What method is used to set attributes for elements?"

    var loadForm = document.createElement("form")

    var loadLabel = document.createElement("label")
    loadLabel.setAttribute("for", "q3")
    loadLabel.innerHTML = "setAttribute"

    var loadInput = document.createElement("input")
    loadInput.setAttribute("id", "q3")
    loadInput.setAttribute("type", "radio")
    loadInput.setAttribute("name", "question1")

    var loadLabel2 = document.createElement("label")
    loadLabel2.setAttribute("for", "q4")
    loadLabel2.innerHTML = "createElement"

    var loadInput2 = document.createElement("input")
    loadInput2.setAttribute("id", "q4")
    loadInput2.setAttribute("type", "radio")
    loadInput2.setAttribute("name", "question1")

    var submitBtn = document.createElement("button")
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("id", "submit1")
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

    document.getElementById('submit1').addEventListener("click", function(){
            
        if (document.getElementById("q4").checked == true){
            secondsLeft -= 10;
        }
        
    })

    document.getElementById('submit1').addEventListener("click", clearLoad3)
}

function highscore(){
    var loadDiv = document.createElement("div")
    loadDiv.setAttribute("class", "highscore")

    var loadForm = document.createElement("form")
    var loadLabel = document.createElement("label")
    loadLabel.setAttribute("for", "hs")
    var loadInput = document.createElement("input")
    loadInput.setAttribute("type", "text")
    loadInput.setAttribute("id", "hs")

    var submitBtn = document.createElement("button")
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("id", "submit1")
    submitBtn.innerHTML = "Submit"

    loadDiv.appendChild(loadForm)
    loadDiv.appendChild(loadLabel)
    loadDiv.appendChild(loadInput)
    loadDiv.appendChild(submitBtn)

    document.body.appendChild(loadDiv)
    
}





