let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let leader = document.getElementById("leader")

function homeAdd1() {
    console.log(leader);
    homeScore += 1
    homeScoreEl.textContent = homeScore 
    setLeader()
}

function homeAdd2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    setLeader()
}

function homeAdd3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    setLeader()
}

function guestAdd1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    setLeader()
}

function guestAdd2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    setLeader()
}

function guestAdd3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    setLeader()
}

function setLeader() {
    if(homeScore > guestScore)
        leader.textContent = "HOME"
    else if(guestScore > homeScore)
        leader.textContent = "GUEST"
    else
        leader.textContent = "DRAW"       
}

function newGame() {
    homeScore = homeScoreEl.textContent = 0
    guestScore = guestScoreEl.textContent = 0
    leader.textContent = "";  
}