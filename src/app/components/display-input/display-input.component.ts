import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-input',
  imports: [],
  templateUrl: './display-input.component.html',
  styleUrl: './display-input.component.scss'
})
export class DisplayInputComponent {

  displayValue: string = "";

  getDisplayValue() {
    return this.displayValue;
  }

  setDisplayValue(value: string) {
    this.displayValue = value;
  }
}
