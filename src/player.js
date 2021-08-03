class Player {
  constructor() {
    // all of these values are what we are going to change in order to move the element
    this.startingY = 0;
    this.startingX = 0;
    this.playerWidth = CELL;
    this.playerHeight = CELL;

    // Since hte rec method is only important for the player, we have it here
    rect(this.startingX, this.startingY, this.playerWidth, this.playerHeight);
  }
}
