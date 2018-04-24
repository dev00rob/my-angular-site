import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* 
// colors
var backgroundRgb = 207;     // originally 207
var backgroundrGb = 254;     // originally 254
var backgroundrgB = 255;     // originally 255

var bodyRgb = 232;           // originally 232
var bodyrGb = 199;           // originally 199
var bodyrgB = 35;            // originally  35

var limbsRgb = 176;          // originally 176
var limbsrGb = 179;          // originally 179
var limbsrgB = 120;          // originally 120

var faceBlack = 0;

// positions & sizes
var bodyX = 0;             // originally 200
var moveForward = true;


draw = function() {
    
    var bodyY = bodyX*(11/10);   // originally 220
    var bodyW = bodyX*(2/5);     // originally  80
    var bodyH = bodyX*(11/20);   // originally 110
    var tailX = bodyX*(3/4);     // originally 150
    var tailY = bodyX*(127/100); // originally 254
    var tailW = bodyX*(1/2);     // originally 100
    var tailH = bodyX*(1/10);    // originally  40
    var earsXleft = bodyX*(19/20); // originally 190
    var earsXright = bodyX*(21/20); // originally 210
    var earsY = bodyX*(5/8);     // originally 125
    var earsW = bodyX*(1/15);    // originally  13.333
    var earsH = bodyX*(1/5);     // originally  40
    var snoutX = bodyX*(43/40);  // originally 215
    var snoutY = bodyX*(4/5);    // originally 160
    var snoutW = bodyX*(6/25);   // originally  48
    var snoutH = bodyX*(1/10);   // originally 120
    var headX = bodyX;           // originally 200
    var headY = bodyX*(3/4);     // originally 150
    var headW = bodyX*(1/5);     // originally  40
    var headH = bodyX*(47/200);  // originally  47
    var feetXHindLeft = bodyX*(7/8); // originally 175
    var feetXHindRight = bodyX*(9/8); // originally 225
    var feetXFrontLeft = bodyX*(37/40); // originally 185
    var feetXFrontRight = bodyX*(43/40); // originally 215
    var feetY = bodyX*(27/20);   // originally 270
    var feetW = bodyX*(1/10);    // originally  20
    var feetH = bodyX*(3/40);    // originally  15
    var legsXleft = bodyX*(37/40); // originally 185
    var legsXright = bodyX*(43/40); // originally 215
    var legsY = bodyX*(9/8);     // originally 225
    var legsW = bodyX*(1/20);    // originally 10
    var legsH = bodyX*(9/20);    // originally 90
    var chestX = bodyX;          // originaly 200
    var chestY = bodyX*(19/20);  // originally 190
    var chestW = bodyX*(3/10);   // originally 60
    var chestH = bodyX*(3/20);   // originally 30
    var noseX = bodyX*(47/40);   // originally 235
    var noseY = bodyX*(4/5);     // originally 160
    var noseW = bodyX*(3/50);    // originally  12
    var noseH = bodyX*(1/20);    // originally  10
    var eyesXleft = bodyX;       // originally 200
    var eyesXright = bodyX*(109/100); // originally 218
    var eyesY = bodyX*(29/40);     // originally 145
    var eyesSize = bodyX*(1/40); // originally   5
    var mouthX1 = bodyX;         // originally 200
    var mouthY1 = bodyX*(41/50); // originally 164
    var mouthX2 = bodyX*(6/5);   // originally 240
    var mouthY2 = bodyX*(81/100); // originally 162
    var fontX = bodyX*(5/4);     // originally 250
    var fontY = bodyX*(3/5);     // originally 120
    var fontSize = bodyX*(5/40);  // originally  35
    var fontName = createFont("Comic Sans MS",fontSize);
    var fontText = "Bork!!!";
    
    background(backgroundRgb, backgroundrGb, backgroundrgB);
    
    // 1st stage: tail, body, ears, snout, head, legs, feet
    noStroke();
    fill(bodyRgb, bodyrGb, bodyrgB);
    ellipse(tailX,tailY,tailW,tailH); // tail
    ellipse(bodyX, bodyY, bodyW, bodyH); // body
    ellipse(earsXleft,earsY,earsW,earsH); // left ear
    ellipse(earsXright,earsY,earsW,earsH); // right ear 
    ellipse(snoutX,snoutY,snoutW,snoutH); // snout
    ellipse(headX, headY, headW, headH); // head
    stroke(limbsRgb, limbsrGb, limbsrgB); // limbs outline
    ellipse(feetXHindLeft,feetY,feetW,feetH); // hind foot, left
    ellipse(feetXHindRight,feetY,feetW,feetH); // hind foot, right
    ellipse(legsXleft,legsY,legsW,legsH); // leg, left
    ellipse(legsXright,legsY,legsW,legsH); // leg, right
    ellipse(feetXFrontLeft,feetY,feetW,feetH); // front foot, left
    ellipse(feetXFrontRight,feetY,feetW,feetH); // front foot, right
    noStroke();
    ellipse(bodyX,chestY,chestW,chestH); // blend legs to chest
    // bodyX = 200, bodyY = 220, bodyW = 80, bodyH = bodyW/2
    
    // 2nd stage: nose, eyes, mouth
    fill(faceBlack, faceBlack, faceBlack);
    stroke(faceBlack, faceBlack, faceBlack);
    ellipse(noseX,noseY,noseW,noseH); // nose
    ellipse(eyesXleft,eyesY,eyesSize,eyesSize); // beady eye, left
    ellipse(eyesXright,eyesY,eyesSize,eyesSize); // beady eye, right
    line(mouthX1,mouthY1,mouthX2,mouthY2); // mouth line
    
    if (bodyX<800 && bodyX>100 && bodyX%60<20){
        textSize(fontSize);
        if (bodyX>200){
            fontX = 100;
            fontY = 100;
        }
        text(fontText,fontX,fontY,fontSize*5,fontSize*5);
    }

    if (moveForward && bodyX<=600){
        bodyX++;
    } else {
        moveForward = false;
        bodyX--;
    }
};
*/