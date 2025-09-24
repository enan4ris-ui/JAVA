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

function jumpscare() {
  document.getElementById("jumpscare").style.visibility = "visible";
}
setTimeout(Timer, 3000);

document.getElementById("jumpscare").style.display = "block";
setTimeout(function () {
  document.getElementById("jumpscare").style.display = "none";
}, 3000);
