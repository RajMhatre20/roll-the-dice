const buttons = document.querySelectorAll("button");
const selected = document.getElementById("selected");
const result = document.getElementById("result");
const dice = document.getElementById("dice");
const timetext = document.getElementById("timer");
var score = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selected.innerText = btn.innerText;
    // Ripple Effect
    let ripple = document.createElement("span");
    btn.appendChild(ripple);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    setTimeout(() => {
      ripple.remove();
    }, 300);
  });
});

const rollTheDice = () => {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice/${randomNumber}.svg`;
  result.style.display = "block";
  console.log(randomNumber, selected.innerText);
  if (randomNumber === parseInt(selected.innerText)) {
    score += 10;
    document.getElementById("score").innerText = score;
    result.innerText = "Your Guess was right!";
  } else {
    result.innerText = "Your Guess was wrong!";
  }
  selected.innerText = 0;
  setTimeout(() => {
    result.style.display = "none";
  }, 3000);
};

window.onload = () => {
  setTimeout(() => {
    var timeleft = 9;
    setInterval(function () {
      if (timeleft < 0) {
        timeleft = 9;
      }
      timetext.innerHTML = `The dice will roll in ${timeleft} seconds`;
      timeleft -= 1;
    }, 1000);
    setInterval(() => {
      rollTheDice();
    }, 10000);
  }, 2000);
};
