import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('display') display!: DisplayInputComponent;

  showAlert: boolean = false;

  ngOnInit(): void {
    this.numbersAndOperators = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      ".", "-", "+", "*", "/", "%"];
  }

  setButtonValue(value: number | string) {
    const displayValue = this.display.getDisplayValue() + value;
    this.display.setDisplayValue(displayValue);
  }

  clearDisplay() {
    const displayValue = "";
    this.display.setDisplayValue(displayValue);
  }

  removeItemDisplay() {
    const displayValue = this.display.getDisplayValue();
    if (displayValue === "Erro...") {
      this.display.setDisplayValue("");
    } else {
      this.display.setDisplayValue(displayValue.split("").slice(0, -1).join(""));
    }
  }

  printResultDisplay() {
    try {
      let result = eval(this.display.getDisplayValue());
      if (result !== undefined && !(isNaN(result))) {
        this.display.setDisplayValue(result.toString());
      }
      else {
        this.display.setDisplayValue("Erro...");
      }
    } catch (error) {
      console.log(error);
      this.display.setDisplayValue("Erro...");
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.display.getDisplayValue());
  }

  showComponent() {
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 1500);
  }
  
}
