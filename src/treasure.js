class Treasure {
  constructor(xPosition, yPosition) {
    // For the lab we'll need to change this and randomize the column and row
    this.x = this.getRandomArbitrary(0, WIDTH - CELL);
    this.y = this.getRandomArbitrary(0, HEIGHT - CELL);

    this.height = CELL;
    this.width = CELL;
  }

  draw() {
    push();
    fill("blue");
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  setRandomPosition() {
    this.x = this.getRandomArbitrary(0, WIDTH - this.width);
    this.y = this.getRandomArbitrary(0, HEIGHT - this.height);
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}
