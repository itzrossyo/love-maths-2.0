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

function runGame() {}

function checkAnswer() {}

function calclateCorrectAnswer() {}

function incrementScore() {}

function incrementWronganswer() {}

function displayAdditonQustion() {}

function displaySubtractQustion() {}

function displayMultiplyQustion() {}

function displayDivisonQustion() {}
