class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    // Once the grid is done
    background("red");

    this.mainPlayer = new Player(0, 0, CELL, CELL);

    // MOVEMENT FOR THE USER

    // we may want to use keyIsDown for movement (each second that it passes, it calls the function)
  }
}
