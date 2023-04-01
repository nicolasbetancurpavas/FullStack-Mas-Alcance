import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ColorModeService {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode)
  }
}
