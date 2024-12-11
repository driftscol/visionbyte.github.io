function goToHomePage() {
    window.location.href = 'index.html';
}

function goToLevelSelect() {
    window.location.href = 'level-select.html';
}

function selectLevel(level) {
    if (level === 1) {
        window.location.href = 'level1.html';
    }
}

function checkGuess(number) {
    const correctNumber = 4;
    const resultMessage = document.getElementById("resultMessage");

    if (number === correctNumber) {
        resultMessage.innerText = "CORRECT! NEXT LEVEL";
        resultMessage.className = "result-message correct";
        resultMessage.style.display = "block";
        setTimeout(() => {
            window.location.href = 'level1-success.html';
        }, 1500);
    } else {
        resultMessage.innerText = "WRONG! TRY AGAIN";
        resultMessage.className = "result-message wrong";
        resultMessage.style.display = "block";
    }
}

function placeInvention() {
    window.location.href = 'level1-invention.html';
}

function goToNextLevel() {
    alert("Proceeding to the next level!");
}
