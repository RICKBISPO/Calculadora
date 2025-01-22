import { Component } from '@angular/core';
import { ActionButtonComponent } from "../action-button/action-button.component";
import { DisplayInputComponent } from "../display-input/display-input.component";
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-calculator',
  imports: [ActionButtonComponent, DisplayInputComponent, AlertComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operators: Array<string> = [".", "-", "+", "*", "/", "%"]
  display: string = "";

  showAlert: boolean = false;

  setButtonValue(value: number | string) {
    this.display += value;
  }

  clearDisplay() {
    this.display = "";
  }

  removeItemDisplay() {
    if (this.display === "Erro...") {
      this.display = "";
    } else {
      this.display =  this.display.split("").slice(0, -1).join("");
    }
  }

  printResultDisplay() {
    try {
      let result = eval(this.display);
      if (result !== undefined) {
        this.display = result.toString();
      }
      else {
        this.display = "Erro...";
      }
    } catch (error) {
      console.log(error);
      this.display = "Erro...";
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.display);
  }

  showComponent() {
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 1500);
  }
  
}
