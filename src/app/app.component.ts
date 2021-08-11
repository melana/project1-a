import { Component } from '@angular/core';
import { LineComponent } from './line/line.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'testproject' ;
  str = new LineComponent;
  stline = "";

  ngOnInit(): void {

    const observable = new Observable<LineComponent>(function subscribe(subscriber) {
      const id = setInterval(() => {
        let str = new LineComponent;
        let stline: string = str.line;
        console.log(str)
        subscriber.next(str);
      }, 3000); 
    })

    observable.subscribe( x => {
      if(!x.hasZero){
      this.stline = x.line}
    });
    
  }

}



