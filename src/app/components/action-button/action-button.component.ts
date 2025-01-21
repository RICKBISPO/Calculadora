import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {

  @Input() buttonClass: string = "";
  @Input() buttonContent: string = "";
  @Input() buttonValue: string | number = "";

  @Output() buttonClicked = new EventEmitter<number | string>();

  onButtonClick(value?: string | number) {
    if (value) {
      this.buttonClicked.emit(value);
    } else {
      this.buttonClicked.emit();
    }
  }

}
