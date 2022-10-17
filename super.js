var sL = 988;
var sW = 630;
var bL = 10;
var rL = 10;
var rup = true;
var bup = true;
var ren, bob, rpn, bpn;
var bPotatos = new Array();
var rPotatos = new Array();
var running = true;
var winner = null;
var bf = false;
var rf = false;
var txtSize = 64;

function setup() {
  createCanvas(sL, sW);
  bob = new Sprite(100, 100, 50, 50, 0, 0, 255, 4)
  ren = new Sprite(854, 482, 50, 50, 255, 0, 0, 4);
  bpn = new iSprite(loadImage("SuperWeapon.png"), bob.x, bob.y, 50, 50, "E");
  rpn = new iSprite(loadImage("SuperWeapon.png"), ren.x, ren.y, 50, 50, "W");
}

function draw() {
  background(0);
  if (winner == "bob") {
    textSize(txtSize)
    fill(0, 0, 255)
    text("BLUE WINS!", sL / 2 - txtSize * 3, sW  / 2)
  }

  if (winner == "ren") {
    textSize(txtSize)
    fill(255, 0, 0)
    text("RED WINS!", sL / 2 - txtSize * 3, sW / 2)
  }
  if (winner == "ren")
  if (bL == 3)
    bob.b = 255;
  if (bL == 2)
    bob.b = 170;
  if (bL == 1)
    bob.b = 85;
  if (bL == 0)
    bob.b = 0;

  if (rL == 3)
    ren.r = 255;
  if (rL == 2)
    ren.r = 170;
  if (rL == 1)
    ren.r = 85;
  if (rL == 0)
    ren.r = 0;
  if (running) {
    
    if (keyIsDown(RIGHT_ARROW)) {
      ren.x += ren.speed;
      rpn.x += ren.speed;
      if (!rf)
        rpn.dir = "E";
    }  
    if (keyIsDown(UP_ARROW)) {
      ren.y -= ren.speed;
      rpn.y -= ren.speed;
    }  
    if (keyIsDown(LEFT_ARROW)) {
      ren.x -= ren.speed;
      rpn.x -= ren.speed;
      if (!rf)
        rpn.dir = "W";
    }  
    if (keyIsDown(DOWN_ARROW)) {
      ren.y += ren.speed;
      rpn.y += ren.speed;
    }  
  
    if (keyIsDown(68)) {
      bob.x += bob.speed;
      bpn.x += bob.speed;
      if (!bf)
        bpn.dir = "E";
    }  
    if (keyIsDown(87)) {
      bob.y -= bob.speed;
      bpn.y -= bob.speed;
    }  
    if (keyIsDown(65)) {
      bob.x -= bob.speed;
      bpn.x -= bob.speed;
      if (!bf)
        bpn.dir = "W";
    }  
    if (keyIsDown(83)) {
      bob.y += bob.speed;
      bpn.y += bob.speed;
    }  
    
    if (keyIsDown(18))
      if (!rf)
        fire(rpn)
    if (keyIsDown(70))
      if (!bf)
        fire(bpn)
    
    for (let n = 0; n < bPotatos.length; n++) {
      if (bPotatos[n].dir == "E")
        bPotatos[n].x += bPotatos[n].speed;
      if (bPotatos[n].dir == "W")
        bPotatos[n].x -= bPotatos[n].speed;
      bPotatos[n].show();
  
      if (bPotatos[n].x + bPotatos[n].width >= ren.x && bPotatos[n].x + bPotatos[n].width <= ren.x + ren.width)
        if (bPotatos[n].y + bPotatos[n].length >= ren.y && bPotatos[n].y + bPotatos[n].length <= ren.y + ren.length) {
          rL--;
          bPotatos[n].y = -50
          if (rL < 1) {
            winner = "bob";
            running = false;
          }
        }

      if (bPotatos[n].x < 0 || bPotatos[n].x > sL || bPotatos[n].y < 0 || bPotatos[n].y > sW) {
        delete iSprite.rpn, iSprite.bpn, Sprite.bob, Sprite.ren;
      }
    }
  
    for (let n = 0; n < rPotatos.length; n++) {
      if (rPotatos[n].dir == "E")
        rPotatos[n].x += rPotatos[n].speed;
      if (rPotatos[n].dir == "W")
        rPotatos[n].x -= rPotatos[n].speed;
      rPotatos[n].show()
  
      if (rPotatos[n].x + rPotatos[n].width >= bob.x && rPotatos[n].x + rPotatos[n].width <= bob.x + bob.width)
        if (rPotatos[n].y + rPotatos[n].length >= bob.y && rPotatos[n].y + rPotatos[n].length <= bob.y + bob.length) {
          bL--;
          rPotatos[n].y = -50;
          if (bL < 1) {
            winner = "ren";
            running = false;
          }
        }

      if (rPotatos[n].x < 0 || rPotatos[n].x > sL || rPotatos[n].y < 0 || rPotatos[n].y > sW) {
        delete iSprite.rpn, iSprite.bpn, Sprite.bob, Sprite.ren
      }
    }  
  
    if (ren.x < 0) {
      ren.x += ren.speed;
      rpn.x += ren.speed
    }  
    if (ren.x + ren.width > sL) {
      ren.x -= ren.speed;
      rpn.x -= ren.speed
    }  
    if (ren.y < 0) {
      ren.y += ren.speed;
      rpn.y += ren.speed
    }  
    if (ren.y + ren.length > sW) {
      ren.y -= ren.speed;
      rpn.y -= ren.speed
    }  
  
    if (bob.x < 0) {
      bob.x += bob.speed;
      bpn.x += bob.speed
    }  
    if (bob.x + bob.width > sL) {
      bob.x -= bob.speed;
      bpn.x -= bob.speed
    }  
    if (bob.y < 0) {
      bob.y += bob.speed;
      bpn.y += bob.speed
    }  
    if (bob.y + bob.length > sW) {
      bob.y -= bob.speed;
      bpn.y -= bob.speed
    }

    if (bf) {
      if (bpn.dir == "E")
        bpn.x += 1;
      if (bpn.dir == "W")
        bpn.x -= 1;
      if (bpn.dir == "E" && bpn.x == bob.x)
        bf = false;
      if (bpn.dir == "W" && bpn.x == bob.x)
        bf = false;
    }

    if (rf) {
      if (rpn.dir == "E")
        rpn.x += 1;
      if (rpn.dir == "W")
        rpn.x -= 1;
      if (rpn.dir == "E" && rpn.x == ren.x)
        rf = false;
      if (rpn.dir == "W" && rpn.x == ren.x)
        rf = false;
    }
  }
  bob.show();
  ren.show();
  bpn.show();
  rpn.show();
  button("Default Royale", "Sniper Royale");
}

function mousePressed() {
  if (mouseX > 10
      && mouseX < 110
      && mouseY > 10
      && mouseY < 60) {
    window.location.href = "https://penguinsrule521.github.io/Website/super.html";
  }
  if (mouseX > 120
      && mouseX < 220
      && mouseY > 10
      && mouseY < 60) {
    window.location.href = "https://penguinsrule521.github.io/Website/default.html";
  }
  if (mouseX > 230
      && mouseX < 330
      && mouseY > 10
      && mouseY < 60) {
    window.location.href = "https://penguinsrule521.github.io/Website/sniper.html";
  }
}

function fire(w) {
  var po;
  if (w.dir == "E") {
    po = new iSprite(loadImage("Bullet.png"), w.x + 25, w.y, 25, 25, w.dir, 5);
    w.x -= 3;
  }
  if (w.dir == "W") {
    po = new iSprite(loadImage("Bullet.png"), w.x - 25, w.y, 25, 25, w.dir, 5);
    w.x += 3;
  }
  if (w == bpn) {
    bPotatos.splice(bPotatos.length, 0, po);
    bf = true;
  }  
  if (w == rpn) {
    rPotatos.splice(rPotatos.length, 0, po);
    rf = true;
  }  
}
