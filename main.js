const keystroke = document.getElementById("keystroke");
const enter = document.getElementById("enter");
const backspace = document.getElementById("backspace");
const container = document.querySelector(".container");

document.addEventListener("keydown", (e) => {
  
  if (e.key === "Enter") {
    enter.play();
    const br = document.createElement("br");
    container.appendChild(br);
  } else {
    if (e.key === "Backspace") {
      if (!backspace.paused) {
        backspace.cloneNode(true).play();
      } else {
        backspace.play();
      }

      container.removeChild(container.lastElementChild);
    } else {
      if (!keystroke.paused) {
        keystroke.cloneNode(true).play();
      } else {
        keystroke.play();
      }
      const span = document.createElement("span");
      span.classList.add("letter", "hide");
      span.innerText = e.key;
      setTimeout(() => span.classList.remove("hide"), 100);
      container.appendChild(span);
    }
  }
});
