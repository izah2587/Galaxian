// gameover.js

function showGameOver() {
//   // Implement your game over screen here
//   background(0); // Set background to black

//   fill(220);
  textSize(32);
  textAlign(CENTER, CENTER);
//   text("Game Over!", width / 2, height / 2 - 50);
  
  if (level===1){
    if (damage>maxDamage){
      image(earthDestroy, width/2,height/2, width, height);
      text("Your Score: " + score, width / 2, height-100);
    }
    else{
      image(tooSlow, width/2,height/2, width, height);
      text("Your Score: " + score, width / 2, height-100);
    }
  }
  
  else if(level ===2){
    if(aliensHitGround>10){ //greater than set value of invasions allowed
      image(earthDestroy, width/2,height/2, width, height);
      text("Your Score: " + score, width / 2, height-100);
    }
    else if(damage>= 15){
      image(shipDestroy,width/2,height/2, width, height );
      text("Your Score: " + score, width / 2, height -100);
    }
    else{
      image(tooSlow, width/2,height/2, width, height);
      text("Your Score: " + score, width / 2, height-100);
    }
  }

  // Draw restart button
  fill(255);
  textSize(20);
  text("Click to Restart", width / 2, height -50);

  // Add event listener for the restart button
  mousePressed = restartGame;
}

function restartGame() {
  // Reload the page to restart the game
  location.reload();
}

