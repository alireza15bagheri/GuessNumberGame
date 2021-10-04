const goldNum = Math.floor(((Math.random() * 10) + 1));
console.log(goldNum);

// document.getElementsByTagName("H1")[0].setAttribute("hidden", "true");

const checkBtn = document.querySelector("#checkBtn");
const checkLbl = document.querySelector("#checkLbl");
let spanTrueFalse = document.querySelector("#trueOrFlase");
let guessRemainedDomObject = document.querySelector("#guessRemained");
let reloadBtn = document.querySelector("#reloadBtn");
let remainedGuess = 5;

reloadBtn.addEventListener("click", () => location.reload());

checkBtn.addEventListener("click", () => {

    let inputText = document.querySelector("#numInput");

    if (Number(inputText.value) === goldNum) {
        console.log("You Won")
        spanTrueFalse.className = "badge bg-success";
        spanTrueFalse.innerHTML = "You Won!";
        checkBtn.setAttribute("hidden", "true");
        inputText.setAttribute("disabled", "true");
        checkLbl.setAttribute("hidden", "true");


    } else if (inputText !== goldNum) {

        console.log("Try Again")
        spanTrueFalse.className = "badge bg-warning";
        spanTrueFalse.innerHTML = "Try Again";
        remainedGuess = remainedGuess - 1;


        if (remainedGuess === 0) {
            spanTrueFalse.className = "badge bg-danger";
            spanTrueFalse.innerHTML = "You Lost!";
            checkBtn.setAttribute("hidden", "true");
            inputText.setAttribute("hidden", "true");

        }
    }

    if (goldNum < Number(inputText.value)) {
        checkLbl.innerHTML = "Gold Number Is LOWER."

    } else if (goldNum > Number(inputText.value)) {
        checkLbl.innerHTML = "Gold Number Is HIGHER."

    }

    if (remainedGuess !== 1) {
        guessRemainedDomObject.innerHTML = (remainedGuess) + " Guesses Remaining";
    } else {
        guessRemainedDomObject.innerHTML = (remainedGuess) + " Guess Remaining";
    }
})