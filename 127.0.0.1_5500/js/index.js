// Game contants & Veriable
let inputDir = { x: 0, y: 0 };
let speed = 10;
let score = 0;
let hi_score = 0;
let lastPrintTime = 0;
let snakeArr = [{ x: 14, y: 14 }];
food = { x: 10, y: 5 };

// Game function
function main(ctime) {
  window.requestAnimationFrame(main);

  if ((ctime - lastPrintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPrintTime = ctime;
  gameEngin();
}
function isCollaps(sarr) {
  for (let i = 1; i < sarr.length; i++) {
    if (sarr[i].x === sarr[0].x && sarr[i].y === sarr[0].y) {
      return true;
    }
  }
  if (sarr[0].x >= 18 || sarr[0].x <= 0 || sarr[0].y >= 18 || sarr[0].y <= 0) {
    return true;
  }
}
function gameEngin() {
  // Updating snake array & food
  if (isCollaps(snakeArr)) {
    inputDir = { x: 0, y: 0 };
    alert("Press any key to paly a game!");
    snakeArr = [{ x: 14, y: 14 }];

    score = 0;
    if (score > hi_score) {
      score_2 = "Hi Score: " + hi_score;
      single_P1.innerHTML = score_2;
    }
  }
  // If you have eaten the food then increment the score and regenerate the food
  if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });

    score_1 = "Score: " + score;
    single_P.innerHTML = score_1;

    score_2 = "Hi Score: " + hi_score;
    single_P1.innerHTML = score_2;

    let a = 2;
    let b = 16;
    score++;
    if (score > hi_score) {
      hi_score = score;
    }

    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving Snake

  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }
  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // Displaying Snake
  board.innerHTML = "";

  score_1 = "Score: " + score;
  single_P.innerHTML = score_1;

  score_2 = "Hi Score: " + hi_score;
  single_P1.innerHTML = score_2;

  snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snakeBody");
    }
    board.appendChild(snakeElement);
  });

  // Displaying Food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");

  board.appendChild(foodElement);
}

// Main Logics
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: -1 }; // Game starts

  switch (e.key) {
    case "ArrowUp":
      inputDir.x = 0;
      inputDir.y = -1;

      break;

    case "ArrowDown":
      inputDir.x = 0;
      inputDir.y = 1;

      break;

    case "ArrowLeft":
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      inputDir.x = 1;
      inputDir.y = 0;

      break;

    default:
      break;
  }
});
