class Player {
  constructor(xValue, yValue) {
    // all of these values are what we are going to change in order to move the element
    this.x = xValue;
    this.y = yValue;
    this.playerWidth = CELL;
    this.playerHeight = CELL;

    this.rightBorder = WIDTH - this.playerWidth;
    this.bottomBorder = HEIGHT - this.playerWidth;
  }

  draw() {
    this.move();
    this.maintainBorders();
    rect(this.x, this.y, this.playerWidth, this.playerHeight);
  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.y += CELL;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= CELL;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= CELL;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += CELL;
    }

    // MOVEMENT FOR THE USER
    // we may want to use keyIsDown for movement (each second that it passes, it calls the function)
  }

  maintainBorders() {
    // Right border
    if (this.x >= this.rightBorder) {
      this.x = this.rightBorder;
    }

    // Left border
    if (this.x < 0) {
      this.x = 0;
    }

    // Up border
    if (this.y < 0) {
      this.y = 0;
    }

    // Bottom border
    if (this.y >= this.bottomBorder) {
      this.y = this.bottomBorder;
    }
  }
}
