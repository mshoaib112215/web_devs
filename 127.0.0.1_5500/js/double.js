// Game contants & Veriable
let inputDir1 = { x: 0, y: 0 };
let inputDir2 = { x: 0, y: 0 };

let speed = 10;
let score1 = 0;
let score2 = 0;
let lastPrintTime = 0;
let snakeArr1 = [{ x: 14, y: 14 }];
let snakeArr2 = [{ x: 14, y: 14 }];
food1 = { x: 10, y: 5 };
food2 = { x: 10, y: 5 };

// Game function
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPrintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPrintTime = ctime;
  gameEngin1();
  gameEngin2();
}
function isCollaps(sarr) {
  for (let i = 1; i < sarr.length; i++) {
    if (sarr[i].x === sarr[0].x && sarr[i].y === sarr[0].y) {
      return true;
    }
  }
  if (sarr[0].x >= 18 || sarr[0].x <= 0 || sarr[0].y >= 20 || sarr[0].y <= 0) {
    return true;
  }
}
function gameEngin1() {
  // Updating snake array & food
  if (isCollaps(snakeArr1)) {
    if (score1 > score2) {
      alert("Player 1 Wins!!!");
    } else if (score1 < score2) {
      alert("Player 2 Wins!!!");
    } else {
      alert("Player 2 Wins!!!");
    }

    snakeArr1 = [{ x: 14, y: 14 }];
    snakeArr2 = [{ x: 14, y: 14 }];

    score1 = 0;
    inputDir1 = { x: 0, y: 0 };
    inputDir2 = { x: 0, y: 0 };
  }
  // If you have eaten the food then increment the score and regenerate the food
  if (snakeArr1[0].x === food1.x && snakeArr1[0].y === food1.y) {
    snakeArr1.unshift({
      x: snakeArr1[0].x + inputDir1.x,
      y: snakeArr1[0].y + inputDir1.y,
    });

    score_1 = "Score: " + score1;
    player1.innerHTML = score_1;
    let a = 2;
    let b = 16;
    score1++;
    console.log(score1);

    food1 = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving Snake

  for (let i = snakeArr1.length - 2; i >= 0; i--) {
    snakeArr1[i + 1] = { ...snakeArr1[i] };
  }
  snakeArr1[0].x += inputDir1.x;
  snakeArr1[0].y += inputDir1.y;

  // Displaying Snake
  board1.innerHTML = "";

  score_1 = "Score: " + score1;
  player1.innerHTML = score_1;

  snakeArr1.forEach((e, index) => {
    let snakeElement1 = document.createElement("div");
    snakeElement1.style.gridRowStart = e.y;
    snakeElement1.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement1.classList.add("head");
    } else {
      snakeElement1.classList.add("snakeBody");
    }
    board1.appendChild(snakeElement1);
  });

  // Displaying Food
  foodElement1 = document.createElement("div");
  foodElement1.style.gridRowStart = food1.y;
  foodElement1.style.gridColumnStart = food1.x;
  foodElement1.classList.add("food");

  board1.appendChild(foodElement1);
}
function gameEngin2() {
  // Updating snake array & food
  if (isCollaps(snakeArr2)) {
    if (score1 > score2) {
      alert("Player 1 Wins!!!");
    } else if (score1 < score2) {
      alert("Player 2 Wins!!!");
    } else {
      alert("Player 1 Wins!!!");
    }
    snakeArr1 = [{ x: 14, y: 14 }];
    snakeArr2 = [{ x: 14, y: 14 }];

    score2 = 0;
    inputDir1 = { x: 0, y: 0 };
    inputDir2 = { x: 0, y: 0 };
  }
  // If you have eaten the food then increment the score and regenerate the food
  if (snakeArr2[0].x === food2.x && snakeArr2[0].y === food2.y) {
    snakeArr2.unshift({
      x: snakeArr2[0].x + inputDir2.x,
      y: snakeArr2[0].y + inputDir2.y,
    });

    let a = 2;
    let b = 16;
    score2++;
    console.log(score2);

    food2 = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving Snake

  for (let i = snakeArr2.length - 2; i >= 0; i--) {
    snakeArr2[i + 1] = { ...snakeArr2[i] };
  }
  snakeArr2[0].x += inputDir2.x;
  snakeArr2[0].y += inputDir2.y;

  // Displaying Snake
  board2.innerHTML = "";

  score_2 = "Score: " + score2;

  player2.innerHTML = score_2;

  snakeArr2.forEach((e, index) => {
    let snakeElement2 = document.createElement("div");
    snakeElement2.style.gridRowStart = e.y;
    snakeElement2.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement2.classList.add("head");
    } else {
      snakeElement2.classList.add("snakeBody");
    }
    board2.appendChild(snakeElement2);
  });

  // Displaying Food
  foodElement2 = document.createElement("div");
  foodElement2.style.gridRowStart = food2.y;
  foodElement2.style.gridColumnStart = food2.x;
  foodElement2.classList.add("food");

  board2.appendChild(foodElement2);
}

// Main Logics
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e1) => {
  switch (e1.key) {
    case "w":
      inputDir1.x = 0;
      inputDir1.y = -1;
      console.log("ArrowUp");

      break;

    case "s":
      inputDir1.x = 0;
      inputDir1.y = 1;

      break;

    case "a":
      inputDir1.x = -1;
      inputDir1.y = 0;
      break;

    case "d":
      inputDir1.x = 1;
      inputDir1.y = 0;

      break;

    default:
      break;
  }
  console.log(inputDir1.x, "  ", inputDir1.y);
});
window.addEventListener("keydown", (e2) => {
  // music.play();
  switch (e2.key) {
    case "ArrowUp":
      inputDir2.x = 0;
      inputDir2.y = -1;
      console.log("ArrowUp");

      break;

    case "ArrowDown":
      inputDir2.x = 0;
      inputDir2.y = 1;

      break;

    case "ArrowLeft":
      inputDir2.x = -1;
      inputDir2.y = 0;
      break;

    case "ArrowRight":
      inputDir2.x = 1;
      inputDir2.y = 0;

      break;

    default:
      break;
  }
  console.log(inputDir2.x, "  ", inputDir2.y);
});
