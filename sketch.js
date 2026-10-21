function setup() {
  createCanvas(600, 700);
  noLoop();
}

function draw() {
  background(247, 235, 220);
  noStroke();

  fill(255, 224, 205);
  ellipse(183, 340, 48, 65);
  ellipse(417, 340, 48, 65);
  ellipse(300, 345, 230, 280);

  fill(91, 54, 39);
  arc(300, 280, 250, 190, PI, TWO_PI, CHORD);
  ellipse(202, 244, 55, 55);
  ellipse(246, 208, 58, 56);
  ellipse(296, 196, 62, 58);
  ellipse(346, 208, 58, 56);
  ellipse(394, 244, 55, 55);
  ellipse(190, 290, 42, 58);
  ellipse(410, 290, 42, 58);

  stroke(91, 54, 39);
  strokeWeight(6);
  line(237, 309, 270, 309);
  line(330, 309, 363, 309);
  noStroke();
  fill(255, 250, 242);
  ellipse(253, 338, 34, 25);
  ellipse(347, 338, 34, 25);
  fill(105, 64, 39);
  ellipse(253, 338, 16, 20);
  ellipse(347, 338, 16, 20);

  stroke(194, 133, 112);
  strokeWeight(4);
  line(300, 350, 294, 388);
  noFill();
  arc(301, 394, 22, 12, 0, PI);
  stroke(145, 82, 76);
  arc(300, 425, 54, 25, 0, PI);

  noFill();
  stroke(48, 54, 58);
  strokeWeight(6);
  ellipse(253, 338, 72, 57);
  ellipse(347, 338, 72, 57);
  line(289, 336, 311, 336);
}
