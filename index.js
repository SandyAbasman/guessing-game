const input = document.getElementById("input_id");
const button = document.getElementById("button");
const numberOfGuessesContainer = document.querySelector(
  ".number_of_guesses_container"
);
const numberOfGuessesText = document.getElementById("number-of-guesses");
const hintContainer = document.querySelector(".hint_container");
const hintText = document.getElementById("hint");
const successContainer = document.getElementById("success");
const gameContainer = document.getElementById("game");
const restartButton = document.getElementById("restart");

// the reset button to reload
// check for empty field

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

button.addEventListener("click", () => {
  const userGuess = Number(input.value);
  let = checkDecimal = /^\d*$/.test(userGuess);

  if (
    (userGuess.length = 0 || userGuess < 1 || userGuess > 100 || !checkDecimal)
  ) {
    hintContainer.style.visibility = "visible";
    hintText.textContent = "Please enter a valid number";
  } else {
    attempts--;

    if (userGuess === randomNumber) {
      gameContainer.style.display = "none";
      successContainer.style.visibility = "visible";
      successContainer.innerHTML = `<button id ="restart"  >Restart</button>
      <div class="congratulation_conatiner">
        <p>
          Congratulation! <br />
          the number was ${randomNumber}.<br />
          You guessed the answer in ${attempts} attempts
        </p>
      </div>
      `;
      const restartButton = document.getElementById("restart");
      restartButton.addEventListener("click", function () {
        refresh();
      });
    } else if (userGuess < randomNumber) {
      hintContainer.style.visibility = "visible";
      hintText.textContent = "too low! try again ";
    } else if (userGuess > randomNumber) {
      hintContainer.style.visibility = "visible";
      hintText.textContent = "too high! try again ";
    }

    numberOfGuessesText.textContent = `Attempts left: ${attempts}`;

    if (attempts === 0 && userGuess !== randomNumber) {
      gameContainer.style.display = "none";
      successContainer.style.visibility = "visible";
      successContainer.innerHTML = `<button id ="restart" >Restart</button>
      <div class="error_conatiner">
        <p>
          You Lose! <br />
          the number was ${randomNumber}.<br />
        </p>
      </div>
      `;
      const restartButton = document.getElementById("restart");
      restartButton.addEventListener("click", function () {
        refresh();
      });
    }
  }
});

function refresh() {
  window.location.reload();
}

// function checkGuess() {
//   let allowedNumberofGuesses = 4;

//   let guessCount = 0;

//   while (guessCount <= allowedNumberofGuesses) {
//     if (guessCount == 1) {
//       gameplay();
//       numberOfGuessesText.textContent = ` you have guessed 5/${guessCount} times`;
//     } else if (guessCount == 2) {
//       gameplay();
//       numberOfGuessesText.textContent = ` you have guessed 5/${guessCount} times`;
//     }
//     guessCount++;
//   }
// }

// function gameplay() {
//   let userGuess = input.value;
//   let answer = 5;
//   if (!(userGuess == answer)) {
//     if (answer < userGuess) {
//       hintContainer.style.visibility = "visible";
//       hintText.textContent = "your guess is higher than the correct answer";
//     } else if (answer > userGuess) {
//       hintContainer.style.visibility = "visible";
//       hintText.textContent = "your guess is lower than the correct answer";
//     }
//   } else if (userGuess == answer) {
//     console.log("correct");
//   }
// }

// hintContainer.style.visibility = "visible";
//    let correctGuess = Math.floor(Math.random()* 5 )+ 1
//    guessCount = 1

// while (guessCount <= numberOfGuessesAllowed){

//     let  usersGuess = window.prompt(`guess a number from 1-5, guesslimit = ${guessCount} of 3 ` )
//          usersGuess = Number(usersGuess)

//          if (usersGuess === correctGuess){
//                     window.alert(`Correct guess, You Won!`)
//                      break
//         } else if (numberOfGuessesAllowed === guessCount ){
//             window.alert(`GAME OVER !!,
//             ${correctGuess} was the answer`)
//             break
//         } else {
//            usersGuess = window.alert(` Wrong guess,try again`)
//          }
//          guessCount++

//  }

//

// let i = 0;
// while (i <= allowedNumberofGuesses) {
//   if (userGuess.length === 0) {
//     console.log("pls enter a number");
//   } else if (!(userGuess === answer)) {
//     console.log("wrong answer");
//   } else if (userGuess === answer) {
//     console.log("correct");
//   } else {
//     console.log("game over");
//   }

//   i++;
// }
