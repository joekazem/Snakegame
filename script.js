var container = document.getElementById("container");
var grid = [];
var width = 20;
var length = 20;
var snake = [];
var fruit = [];
var score = 0;
//var currentMovement = "";
var keyMovement = "";

function settings() {
    var setting = `
<h1>settings</h1>
<button onclick="menu()">Back to Menu</button>

`

}

function startGame() {

}

function loadGame() {

}

function menu() {
    var welcome = `
    <h1 id="welcome">Welcome to the Snake Game</h1>
    <button onclick="startSnake()">Start game</button>
    <button>Load Game</button>
    <button onclick="settings()">Settings</button>
    
    `

    container.innerHTML = welcome
}

function startSnake() {
    generateGrid();
    drawSnake();
    drawFruit();
    bindKeys();
    setInterval(gameLoop, 250);

}

function bindKeys() {
    document.addEventListener("keydown", (event) => {
        var key = event.keyCode;
        if (key == 65) {
            keyMovement = "left";
        } else if (key == 68) {
            keyMovement = "right";
        } else if (key == 83) {
            keyMovement = "down";
        } else if (key == 87) {
            keyMovement = "up";
        }
        //console.log("button test");
    })

}

function fruitCollision() {
    var snakeX = snake[0][0];
    var snakeY = snake[0][1];
    var fruitX = fruit[0][1];
    var fruitY = fruit[0][0];
    console.log(snakeX + "," + snakeY + "=" + fruitX + "," + fruitY);
    if (snakeX == fruitX && snakeY == fruitY) {
        drawFruit();
        score = score + 1; // or score+= 1; or score++;
        console.log("collision Detect");
    }

}

function gameLoop() {
    moveSnake();
    fruitCollision();
    printGrid();
    //console.log("test");
}

function drawSnake() {
    var snakeX = Math.floor(Math.random() * width)
    var snakeY = Math.floor(Math.random() * length)
    grid[snakeY][snakeX] = `<span class="snakeHead gridPart"></span>`;
    snake.push([snakeX, snakeY]);
}

function moveSnake() {
    var snakeX = snake[0][0];
    var snakeY = snake[0][1];
    //var newSnakeX = snakeX - 1;
    //var newSnakeY = snakeY - 1;
    if (keyMovement == "left") {
        var newSnakeX = snakeX - 1;
    } else if (keyMovement == "right") {
        var newSnakeX = snakeX + 1;
    } else {
        var newSnakeX = snakeX;

    }
    if (keyMovement == "down") {
        var newSnakeY = snakeY + 1;
    } else if (keyMovement == "up") {
        var newSnakeY = snakeY - 1;

    } else {
        var newSnakeY = snakeY;
    }

    if (newSnakeY >= length) {
        newSnakeY = 0;
    }
    if (newSnakeY < 0) {
        newSnakeY = length - 1
    }
    if (newSnakeX >= width) {
        newSnakeX = 0;
    }
    if (newSnakeX < 0) {
        newSnakeX = width - 1
    }
    //grid[snakeY][snakeX] = `<span class="gridPart"></span>`;
    // console.log (newSnakeY + " " + newSnakeX)
    grid[newSnakeY][newSnakeX] = `<span class="snakeHead gridPart"></span>`;
    grid[snakeY][snakeX] = `<span class="gridPart"></span>`;
    snake[0][0] = newSnakeX;
    snake[0][1] = newSnakeY;
}

function drawFruit() {
    var fruitX = Math.floor(Math.random() * width)
    var fruitY = Math.floor(Math.random() * length)
    grid[fruitX][fruitY] = '<span class="fruitBody gridPart"></span>';
    fruit.push([fruitX, fruitY]);
}

function generateGrid() {
    for (var w = 0; w < width; w++) {
        grid[w] = []
        for (l = 0; l < length; l++) {
            grid[w][l] = `<span class="gridPart"></span>`
        }
    }
}

function printGrid() {
    var finalGrid = `<div class="gridContainer">`;
    for (var w = 0; w < width; w++) {


        for (l = 0; l < length; l++) {
            finalGrid += grid[w][l]

        }
        finalGrid += `<br>`
    }
    finalGrid +=`</div>`;
    var finalPrint = finalGrid + printScore();
    container.innerHTML = finalPrint;
}
function printScore() {
var scoreBoard = `<div class="scoreContainer">`;
scoreBoard += score + `</div>`;
return scoreBoard;
}
menu();