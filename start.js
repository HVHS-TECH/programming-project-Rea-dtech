let img;
let seaGull;
function preload() {
    img = loadImage('seagull.png');
}

function setup() {

    createCanvas(windowWidth, windowHeight);

}
let gameState = 'start';
function draw() {
    background(220);
    if (gameState === 'start') {
        displaystartScreen();
    }
    else if (gameState === 'play') {
        playGame();
    }
    else if (gameState === 'gameOver') {
        displayGameOverScreen();
    }
    if (kb.pressing('left')) {

        seaGull.rotate(-10);
    }
    if (kb.pressing('right')) {
        
        seaGull.rotate(10);
    }
    if (kb.pressing('up')) {
    // work out how to get it to move
    }
    if (kb.pressing('down')) {
      // same thing
    }
}
// improve the start screen and think of a better game name
function displaystartScreen() {
    textAlign(CENTER, CENTER);
    textSize(20);
    text('Welcome to Fishing, click to start, full screen is recommended (press F11 or the full screen button on your keyboard)', width / 2, height / 2);
}

function playGame() {
    // game code goes here just has the text for now
  

    text('game', width / 2, height / 2);
}
function displayGameOverScreen() {
    text('Game Over', width / 2, height / 2);
}
function mousePressed() {
    if (gameState === 'start' || gameState === 'gameOver') {
        gameState = 'play';
        seaGull = new Sprite(width / 2, height / 2, 10, 10);
            seaGull.img = img;
        seaGull.scale = 0.5;
        // add to reset game variables if needed
    }

}
// maybe add if a key is press to do something on the menu
function keyPressed() {
}
