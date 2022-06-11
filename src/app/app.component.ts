import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';

    enterHover(event){
      console.log(event);
   }

   exitHover(event){
     console.log(event);
   }

}
