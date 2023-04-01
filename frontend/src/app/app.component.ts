import { Component } from '@angular/core';
import { ColorModeService } from './services/darkMode';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public darkmode: ColorModeService) { }
}

