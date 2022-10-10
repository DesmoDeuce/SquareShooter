class Sprite {
  constructor(posX, posY, width, length, r, g, b, speed) {
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.length = length;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
  }
  show() {
    noStroke()
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.length);
  }
}

class iSprite {
  constructor(image, posX, posY, width, length, dir, speed) {
    this.image = image;
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.length = length;
    this.dir = dir;
    this.speed = speed;
  }
  show() {
    if (this.dir == "W") {
      push();
      scale(-1, 1);
      image(this.image, -(this.x + 20), this.y + 10, this.width, this.length);
      pop();
    }  
    else
      image(this.image, this.x + 30, this.y + 10, this.width, this.length); 
  }
}
