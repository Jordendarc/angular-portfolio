import { Component } from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';
  faGithub
  faLinkedin
  constructor(library: FaIconLibrary) {
    this.faGithub = faGithub
    this.faLinkedin = faLinkedin
    library.addIcons(faGithub);
  }
    enterHover(event){
   }

   exitHover(event){
   }

}
