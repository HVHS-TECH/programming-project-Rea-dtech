//fix copyright for imgs
const credits = "seagull and fish art: freepik.com";
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
        fill(255); // reset fill for other text
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
    text('(press F11 or the full screen button on your keyboard if you would prefer full screen then reload the page in order to eat the fish you have to get it with the beak of the seagull)', width / 2, height / 3 + 40);
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
    if (fish.y > height + 0) {
        lives -= 1;
        if (lives <= 0) {
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
// maybe add if a key is press to do something on the menu
function keyPressed() {
}







