//wait for the dom to finsh loading beofre running the game
//get the button elements and add event listners to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("you clicked submit!");
      } else {
        let gameType = this.getAttribute("data-Type");
        alert(`you clicked ${gameType}`);
      }
    });
  }
});

/**
 * The main game "LOOP", called when the script is first loaded
 * and after the user's answer has  been processed
 */

function runGame() {
  //create two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25 + 1);
  let num2 = Math.floor(Math.random() * 25 + 1);
}

function checkAnswer() {}

function calclateCorrectAnswer() {}

function incrementScore() {}

function incrementWronganswer() {}

function displayAdditonQustion() {}

function displaySubtractQustion() {}

function displayMultiplyQustion() {}

function displayDivisonQustion() {}
