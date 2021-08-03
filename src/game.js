class Game {
  constructor() {
    this.points = 0;
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    // Once the grid is done
    background("red");
  }

  collisionCheck() {
    const aUnderSide = mainPlayer.y + mainPlayer.playerHeight;
    const bTopSide = treasure.y;
    if (aUnderSide < bTopSide) {
      return false;
    }

    const aRightSide = mainPlayer.x + mainPlayer.playerWidth;
    const bLeftSide = treasure.x;
    if (aRightSide < bLeftSide) {
      return false;
    }

    const aLeftSide = mainPlayer.x;
    const bRightSide = treasure.x + treasure.width;
    if (aLeftSide > bRightSide) {
      return false;
    }

    const aTopSide = mainPlayer.y;
    const bUnderSide = treasure.y + treasure.height;

    if (aTopSide > bUnderSide) {
      return false;
    }

    return true;
  }
}
