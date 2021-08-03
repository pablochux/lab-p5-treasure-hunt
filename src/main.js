const game = new Game();
let mainPlayer = new Player(0, 0);
let treasure = new Treasure(500, 500);
let pointsSpan = document.querySelector("#points");

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  mainPlayer.draw();
  treasure.draw();

  if (game.collisionCheck(this.player, this.treasure)) {
    console.log("COLISION");
    game.points++;

    pointsSpan.innerText = game.points;
    console.log(game.points);
  }
}
