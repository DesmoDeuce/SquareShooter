
function button(link1, link2) {
  fill(255);
  noStroke();
  rect(10, 10, 100, 50);
  textSize(18);
  fill(0);
  text("Play Again", 60 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(120, 10, 100, 50);
  textSize(18);
  fill(0);
  text(link1, 170 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(230, 10, 100, 50);
  textSize(18);
  fill(0);
  text(link2, 280 - 18 * 2.5, 35 + 18 / 2.5)
}
