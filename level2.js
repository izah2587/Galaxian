// level2.js

// Level 2 logic
function drawLevel2() {
  background(25);

  // Display and update aliens
  createAliens();
  for (let alien of aliens) {
    alien.display();
    alien.update();

    // Check for collisions with spaceship lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      if (lasers[i].hits(spaceship) && isSerialConnected) {
        lasers.splice(i, 1);
        // Implement the desired behavior when an alien laser hits the spaceship
        gameOver();
      }
    }

    // Check if the alien should shoot
    if (millis() - alien.lastShootTime >= alien.alienShootInterval) {
      alien.shootTowards(spaceship.y);
      alien.lastShootTime = millis(); // Update the last shoot time for the alien
    }
  }

  // Additional common logic
  spaceship.display();
  spaceship.update();
  updateLasers();

  if (isSerialConnected) {
    let elapsedTime = millis() - startTime;
    let remainingTime = max(0, gameDuration - elapsedTime);

    fill(220);
    text("Score: " + score, 20, 30);
    text("Remaining Time: " + (remainingTime / 1000).toFixed(2) + "s", 20, 60);

    if (remainingTime <= 0) {
      gameOver();
    }
  } else {
    fill(220);
    textSize(30);
    text("Galaxian 2.0", width / 3 + 20, height / 2 - 40);
    text("Press Space Bar to start", width / 4, height / 2);
  }

  console.log(potVal);
  console.log(shoot);
}
