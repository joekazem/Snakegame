var container = document.getElementById("container");
var grid = [];
var width = 30;
var length = 30;
var snake = [];
var fruit = [];
document.addEventListener("keypress", (event) => {
        if (event.key == 37) {
            console.log ("left button pressed")
        }else if (event.key == 39) {
console.log ("right button pressed")
        }
    })
function settings () {
var setting = `
<h1>settings</h1>
<button onclick="menu()">Back to Menu</button>

`

}
function startGame () {

}
function loadGame () {

}
function menu () {
    var welcome = `
    <h1 id="welcome">Welcome to the Snake Game</h1>
    <button onclick="startSnake()">Start game</button>
    <button>Load Game</button>
    <button onclick="settings()">Settings</button>
    
    `

    container.innerHTML = welcome 
}
function startSnake () {
generateGrid ();
drawSnake();
drawFruit ();
bindKeys ();
setInterval(gameLoop, 1000);

}
function bindKeys () {
    
}
function gameLoop () {
moveSnake ();
printGrid ();
//console.log("test");
}
function drawSnake () {
   var snakeX = Math.floor(Math.random() * width)
   var snakeY = Math.floor(Math.random() * length)
   grid[snakeY][snakeX] = `<span class="snakeHead gridPart"></span>`;
   snake.push([snakeX, snakeY]);
}
function moveSnake () {
    var snakeX = snake[0][0];
    var snakeY = snake[0][1];
    var newSnakeX = snakeX - 1;
    var newSnakeY = snakeY -1;
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
function drawFruit () {
    var fruitX = Math.floor(Math.random() * width)
    var fruitY = Math.floor(Math.random() * length)
    grid[fruitX][fruitY] = '<span class="fruitBody gridPart"></span>';
    fruit.push([fruitX, fruitY]);
}
function generateGrid () {
    for (var w = 0; w < width; w++) {
        grid[w] = []
        for (l = 0; l < length; l++) {
            grid[w][l] = `<span class="gridPart"></span>`
        }
    }
}
function printGrid () {
    var finalGrid = "";
    for (var w = 0; w < width; w++) {
        
    
        for (l = 0; l < length; l++) {
        finalGrid += grid[w][l]

        }
        finalGrid += `<br>`
    }

container.innerHTML = finalGrid
}

menu ();
