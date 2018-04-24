import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* 
// wooden table
background(186, 145, 20); 

// plate
ellipse(200, 200, 350, 350); 
ellipse(200, 200, 300, 300); 

// peas
fill(138, 237, 102);          // 1
ellipse(100, 165, 30, 30);
ellipse(120, 145, 30, 30);
ellipse(125, 165, 30, 30);
ellipse(140, 155, 30, 30);
ellipse(100, 185, 30, 30);
ellipse(120, 195, 30, 30);
ellipse(140, 185, 30, 30);
ellipse(115, 178, 30, 30);

// mash potatoes & gravy
noStroke();                  // 2
fill(250, 249, 213);         // 3
arc(250,250,188,80,90,240);
arc(287,281,286,74,122,234);
arc(235,260,163,136,282,492);
arc(265,222,133,112,151,435);
arc(290,239,188,80,90,240);
fill(161, 120, 8);           // 4
ellipse(247,233,58,88);
ellipse(228,267,101,74);

*/