let gullImg;
let seaGull;
let fish;
let oceanBackground;
let score;
let fishImg;
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
    text(
        'Welcome to Fishing, click to start (press F11 or the full screen button on your keyboard if you would prefer full screen then reload the page in order to eat the fish you have to get it with the beak of the seagull)',
        width / 2,
        height / 2
    );
}

// spawns fish and has them go to the bottom of the screen and can be eaten
function spawnFish() {
     if (fish) {
        fish.remove();
    }
    fish = new Sprite(random(50, width - 10), -100, 10, 10)
    fish.vel.y = random(4, 13);
    fish.addCollider(0, 5, 200, 80)
    fish.scale = 0.35
    fish.img = fishImg;
      fish.debug = true;
    fish.rotation= 90
}
function playGame() {
    // game code goes here just has the text for now
    if (seaGull.collides(fish)) {
        spawnFish();
    }

    if (fish.y > height + 50) {
        spawnFish();
    }

    seaGull.moveTowards(mouse, 0.20);
    seaGull.rotateTowards(mouse, 1, -100);

}
function displayGameOverScreen() {
    text('Game Over', width / 2, height / 2);
}
// when the mouse is pressed on the start menu the gamestate is changed to play and loads all of the sprites


function mousePressed() {
    if (gameState === 'start' || gameState === 'gameOver') {
        gameState = 'play';
        seaGull = new Sprite(width / 2, height / 2, 100, 100);
        spawnFish();
        seaGull.img = gullImg;
        seaGull.scale = 0.5;
        seaGull.debug = true;
        seaGull.addCollider(0, 20, 50, 50)
        // add to reset game variables if needed
    }

}
// maybe add if a key is press to do something on the menu
function keyPressed() {
} 







