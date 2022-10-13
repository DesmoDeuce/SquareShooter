
function button(link1, link2) {
  fill(255);
  noStroke();
  rect(10, 10, 120, 50);
  textSize(18);
  fill(0);
  text("Play Again", 70 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(140, 10, 120, 50);
  textSize(18);
  fill(0);
  text(link1, 190 - 18 * 2.5, 35 + 18 / 2.5)
  fill(255);
  noStroke();
  rect(270, 10, 120, 50);
  textSize(18);
  fill(0);
  text(link2, 320 - 18 * 2.5, 35 + 18 / 2.5)
}
