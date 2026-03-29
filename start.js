
const credits = "seagull and fish art: freepik.com";
const tips = [
    "try to move slowly not quickly to avoid missing the fish",
    "be prepared for a fish to spawn in at the other side of the screen",
    "your lives can go quickly so when you lose one don't just give up catch the next fish",
    "did you know the game developers high score is 69",
    "make sure your movements are controlled ",
];
let currentTip;
let lives = 3;
let gullImg;
let seaGull;
let fish;
let oceanBackground;
let fishImg;
let score = 0;
function preload() {
    gullImg = loadImage('seagull.png');
    oceanBackground = loadImage('image.png')
    fishImg = loadImage('fish.png')
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
        textSize(20);
        textAlign(LEFT);
        text('Score: ' + score, 10, 30);
        text('Lives: ' + lives, 10, 60);
        // red dots to indicate lives
        for (let i = 0; i < lives; i++) {
            fill(255, 0, 0);
            noStroke();
            ellipse(20 + i * 25, 90, 15, 15);
        }
        fill(255); 
    }
    else if (gameState === 'gameOver') {
        displayGameOverScreen();


    }


}
// improve the start screen and think of a better game name
function displaystartScreen() {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255)
    text(
        'Welcome to Fishing, click to start ',

        width / 2,
        height / 3
    );
   
    textAlign(CENTER, CENTER);
    textSize(20.5);
    fill(255);
    text('(To control the seagull use your mouse as the seagull follows the mouse and the goal is to catch the fish if you miss the fish then you would lose a live)', width / 2, height / 3 + 40);
    textSize(16);
    text('Credits: sprites from freepik.com', width / 2, height / 3 + 80);
}


// spawns fish and has them go to the bottom of the screen and can be eaten
function spawnFish() {
    if (fish) {
        fish.remove();
    }
    fish = new Sprite(random(50, width - 10), -100, 10, 10)
    fish.vel.y = random(10, 25);
    fish.addCollider(0, 5, 210, 90)
    fish.scale = 0.35
    fish.img = fishImg;
    fish.rotation = 90
}
function playGame() {
    // game code goes here and we have the code for the fish being eaten and the seagulls movement
    if (seaGull.collides(fish)) {
        score += 1;
        spawnFish();
    }
    //if lives are at 0 game over and one is lost every time the fish goes through the bottom of the screen
    if (fish.y > height) {
        lives -= 1;
        if (lives <= 0) {
            currentTip = random(tips);
            gameState = 'gameOver';
        } else {
            spawnFish();
        }
    }

    seaGull.moveTowards(mouse, 0.20);
    seaGull.rotateTowards(mouse, 1, -100);

}
function displayGameOverScreen() {
    if (seaGull) {
        seaGull.remove();
    }
    textAlign(CENTER, CENTER);
    text('Game Over, click the mouse to play again and you caught ' + score + ' fish', width / 2, height / 2);

    textSize(20);
    text('Tip: ' + currentTip, width / 2, height / 2 + 50);

    textSize(40)
}
// when the mouse is pressed on the start menu the gamestate is changed to play and loads all of the sprites


function mousePressed() {
    if (gameState === 'start' || gameState === 'gameOver') {

        gameState = 'play';
        score = 0;
        lives = 3;
        if (seaGull) {
            seaGull.remove();
        }
        seaGull = new Sprite(width / 2, height / 2, 100, 100);
        spawnFish();
        seaGull.img = gullImg;
        seaGull.scale = 0.5;
        seaGull.addCollider(0, 20, 50, 50)

        // add to reset game variables if needed
    }
}








