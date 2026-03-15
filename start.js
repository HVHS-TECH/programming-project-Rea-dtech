let img;
let seaGull;
let fish;
let oceanBackground;
function preload() {
    img = loadImage('seagull.png');
    oceanBackground = loadImage('image.png')
}

function setup() {

    createCanvas(windowWidth, windowHeight);

}
let gameState = 'start';
function draw() {
    background(oceanBackground);

    if (gameState === 'start') {
        displaystartScreen();
    }
    else if (gameState === 'play') {
        playGame();
    }
    else if (gameState === 'gameOver') {
        displayGameOverScreen();
    }
    /*
    ATTEMPT AT KBM MOVEMENT MAY USE
    if (kb.pressing('left')) {

        seaGull.rotate(-50);
    }
    if (kb.pressing('right')) {
        
        seaGull.rotate(50);
    }
    if (kb.pressing('up')) {
    // work out how to get it to move
    }
    if (kb.pressing('down')) {
      // same thing
    }
      */

}
// improve the start screen and think of a better game name
function displaystartScreen() {
    textAlign(CENTER, CENTER);
    textSize(20);
    text('Welcome to Fishing, click to start (press F11 or the full screen button on your keyboard if you would prefer full screen then reload the page )', width / 2, height / 2);
}

function playGame() {
    // game code goes here just has the text for now

    seaGull.moveTowards(mouse, 0.20);
    seaGull.rotateTowards(mouse, 1, -100);
    text('game', width / 2, height / 2);
}
function displayGameOverScreen() {
    text('Game Over', width / 2, height / 2);
}
function mousePressed() {
    if (gameState === 'start' || gameState === 'gameOver') {
        gameState = 'play';
        seaGull = new Sprite(width / 2, height / 2, 10, 10);
        fish = new Sprite()
        seaGull.img = img;
        seaGull.scale = 0.5;
        // add to reset game variables if needed
    }

}
// maybe add if a key is press to do something on the menu
function keyPressed() {
}
