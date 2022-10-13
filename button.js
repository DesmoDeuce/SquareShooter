
function button(link1, link2) {
  fill(255);
  noStroke();
  rect(10, 10, 125, 50);
  textSize(18);
  fill(0);
  text("Play Again", 73 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(145, 10, 125, 50);
  textSize(18);
  fill(0);
  text(link1, 193 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(275, 10, 125, 50);
  textSize(18);
  fill(0);
  text(link2, 327 - 18 * 2.5, 35 + 18 / 2.5)
}
