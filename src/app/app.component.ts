import { Component } from '@angular/core';
import { LineComponent } from './line/line.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'testproject';
  str = new LineComponent;
  stline = "";
  
  ngOnInit(): void {
    setInterval(() => {
      this.str = new LineComponent;
      this.stline = this.str.line

      console.log(this.str)
    }, 3000);
  }

}



