
function button(link1, link2) {
  fill(255);
  noStroke();
  rect(45, 10, 125, 50);
  textSize(18);
  fill(0);
  text("Play Again", 108 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(180, 10, 125, 50);
  textSize(18);
  fill(0);
  text(link1, 228 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(315, 10, 125, 50);
  textSize(18);
  fill(0);
  text(link2, 368 - 18 * 2.5, 35 + 18 / 2.5)
}
