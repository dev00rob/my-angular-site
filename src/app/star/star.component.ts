import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* 
var xPos = 400;
var yPos = 1;
var starSize = 10;
var rgbRed = 29;
var rgbGreen = 40;
var rgbBlue = 115;
var faceX = 100;
var faceY = 350;
var faceW = 90;
var faceH = 80;
var faceEyeSize = 10;
var faceMouthW = 60;
var faceMouthH = 30;

// shooting star gets too close for comfort, changes sky
draw = function() {
    if (starSize<100){
        background(rgbRed, rgbGreen, rgbBlue);
        // face
        fill(255, 247, 176);
        ellipse(faceX,faceY,faceW,faceH);
        fill(0, 0, 0);
        ellipse(faceX-15,faceY-5,faceEyeSize,faceEyeSize);
        ellipse(faceX+15,faceY-5,faceEyeSize,faceEyeSize);
        arc(faceX,faceY+10,faceMouthW,faceMouthH,1,180);
    }
    else {
        background(++rgbRed, --rgbGreen, --rgbBlue);
        // face
        fill(255, 247, 176);
        ellipse(faceX,faceY,faceW,faceH);
        fill(0, 0, 0);
        faceX += 3;
        ellipse(faceX-15,faceY-5,faceEyeSize,faceEyeSize);
        ellipse(faceX+15,faceY-5,faceEyeSize,faceEyeSize);
        arc(faceX,faceY+25,faceMouthW,faceMouthH,180,360);
    }
    
    // sun
    fill(255, 242, 0);
    ellipse(xPos, yPos, starSize, starSize);
    
    xPos -= 1.5;
    yPos += 1;
    starSize += (starSize<75)?(0.5):(2);
};

*/