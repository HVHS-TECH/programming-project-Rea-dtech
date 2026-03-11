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
}
// improve the start screen 
function displaystartScreen() {
    textAlign(CENTER, CENTER);
    textSize(20);
    text('Welcome to catching, click to start', width / 2, height / 2);
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
        // add to reset game variables if needed
    }
    
}
// maybe add if a key is press to do something on the menu
function keyPressed() {
}