import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionButtonComponent } from "../action-button/action-button.component";
import { DisplayInputComponent } from "../display-input/display-input.component";
import { AlertComponent } from "../alert/alert.component";
import { CalculatorContainerComponent } from "../calculator-container/calculator-container.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [ActionButtonComponent, 
    DisplayInputComponent, 
    AlertComponent, 
    CalculatorContainerComponent,
    CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {

  numbersAndOperators: Array<number | string> = [];
  display: string = "";

  @ViewChild('showAlert') showAlert: boolean = false;

  ngOnInit(): void {
    this.numbersAndOperators = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      ".", "-", "+", "*", "/", "%"];
  }

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
      if (result !== undefined && !(isNaN(result))) {
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
