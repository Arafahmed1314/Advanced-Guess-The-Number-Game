const input = document.querySelector(".input");
const submitBtn = document.querySelector(".btn");
const prevGuess = document.querySelector("#preguess");
const remainingGuess = document.getElementById("attempts");
const reset = document.querySelector(".reset");
let randomNumber = Math.floor(Math.random() * 100);
let index = 0;
let remaining = 10;
const genrandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};
submitBtn.addEventListener("click", () => {
  if (input.value != "") evaluateGame(parseInt(input.value));
});
const lowHigh = document.querySelector(".low-high");
const over = document.querySelector(".ans");
const evaluateGame = (num) => {
  input.value = "";
  index++;
  if (num != randomNumber) {
    console.log(randomNumber + " " + num);
    lowHigh.style.display = "block";
    remainingGuess.innerHTML = 10 - index;
    prevGuess.innerHTML += index == 10 ? `${num}` : `${num},`;

    if (index == 10) {
      over.style.display = "block";
      document.getElementById("ans").innerText = randomNumber;
      lowHigh.style.display = "none";
      reset.style.display = "block";
    }
    if (index < 10) {
      if (randomNumber < num) {
        lowHigh.innerText = "Try Lower Number";
      }
      if (num < randomNumber) {
        lowHigh.innerText = "Try Greater Number";
      }
    }
  } else {
    lowHigh.innerHTML = "WOW !! CONGRATULATIONS";
    index = 0;
    remainingGuess.innerHTML = 10;
    prevGuess.innerHTML = "";
    reset.style.display = "block";
  }
};
reset.addEventListener("click", () => {
  randomNumber = genrandomNumber();
  index = 0;
  remainingGuess.innerHTML = 10;
  lowHigh.style.display = "none";
  over.style.display = "none";
  prevGuess.innerHTML = "";
  reset.style.display = "none";
});
