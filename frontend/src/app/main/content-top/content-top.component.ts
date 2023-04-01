
import { Component } from '@angular/core';
import { ColorModeService } from 'src/app/services/darkMode';

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.css']
})
export class ContentTopComponent {
  constructor(private colorModeService: ColorModeService) { }

  toggleDarkMode() {
    this.colorModeService.toggleDarkMode();
  }
}
