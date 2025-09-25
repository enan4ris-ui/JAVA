const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value = this.value;
    let text = display.textContent.trim();
    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.substring(0, text.length - 1);
    } else if (value === "=") {
      display.textContent = eval(text);
    } else if (value === "+/-") {
      display.textContent = text.startsWith("-")
        ? text.substring(1)
        : `-${text}`;
    } else {
      display.textContent = text === "0" ? value : text + value;
    }
  });
});

var aud = document.getElementById("ASong").children[0];
var isPlaying = false;
aud.pause();

function playPause() {
  if (isPlaying) {
    aud.pause();
  } else {
    aud.play();
  }
  isPlaying = !isPlaying;

  const audio = document.getElementById("ASong");
  const playDuration = 5000;
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, playDuration);
}
