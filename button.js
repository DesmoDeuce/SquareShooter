
function button() {
  fill(255);
  noStroke();
  rect(10, 10, 100, 50);
  textSize(18);
  fill(0);
  text("Play Again", 60 - 18 * 2.5, 35 + 18 / 2.5)
}

function mousePressed(link, link1, link2) {
  if (mouseX > 10
      && mouseX < 110
      && mouseY > 10
      && mouseY < 60) {
    window.location.href = link;
  }
}
