import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

@Injectable()
export class LineComponent implements OnInit {

  line: string = '';
  checkline: any;
  isPalindrom = false;
  allNumbers = false;
  hasZero = false;
  color = 'black';
 
  chars: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  constructor() { 

    while (this.line.length < 5) {
      this.line += this.chars[Math.floor(Math.random() * this.chars.length)];
    }

    this.checkline = Array.from(this.line);

    // Checking if line is palindrom
    if (this.line  === this.line.split('').reverse().join('')){
        this.isPalindrom = true}
 
    // Checking if all symbols in line are numbers
    for (let i = 0; i < this.checkline.length; i++) { 
        if (!isNaN(parseInt(this.checkline[i],10))){
            this.allNumbers = true;
        } else {
            this.allNumbers = false;
            break;
        }
    }
   
    // Checking if line has zero
    for (let i = 0; i < this.checkline.length; i++) { 
        if (this.checkline[i] == 0){
            this.hasZero = true;
            break;
        } else {
            this.hasZero = false;
        }
    }
   
    // Change font-color 
    if (this.isPalindrom) {
        this.color = 'red';
    } else if (this.allNumbers) {
        this.color = 'blue';
    } 

  }

  ngOnInit(): void {
  }
}
