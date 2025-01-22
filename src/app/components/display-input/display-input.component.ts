import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-input',
  imports: [],
  templateUrl: './display-input.component.html',
  styleUrl: './display-input.component.scss'
})
export class DisplayInputComponent {

  @Input() inputClass: string = "";
  @Input() displayValue: string = "";

}
