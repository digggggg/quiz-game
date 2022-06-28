

loadPage();



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

function clearLoad(){
    this.parentNode.style.display='none';
}






