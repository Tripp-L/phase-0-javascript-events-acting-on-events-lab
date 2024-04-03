const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "yellow";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

function moveDodgerRight() {
  const leftNumbers =dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
  dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
}) 

// Added moveDodgerUp and moveDodgerDown

function moveDodgerUp() {
  const topNumbers = dodger.style.top.replace("px", "");
  const top = parseInt(topNumbers, 10);

  if (top > 0) {
    dodger.style.top = `${top - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
})

function moveDodgerDown() {
  const topNumbers = dodger.style.top.replace("px", "");
  const top = parseInt(topNumbers, 10);

  if (top > 0) {
    dodger.style.top = `${top + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
})


