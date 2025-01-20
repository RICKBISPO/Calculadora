import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  display: string = "";

  setButtonValue(value: number | string): void {
    if (value === 'clean') {
      this.display = "";
    }
    else if (value === 'delete') {
       this.display =  this.display.split("").slice(0, -1).join("");
    }
    else {
      this.display += value;
    }
  }

  getResult(): void {
    try {
      this.display = eval(this.display);
    } catch (error) {
        console.log(error);
        this.display = "Erro...";
    }
  }

}
