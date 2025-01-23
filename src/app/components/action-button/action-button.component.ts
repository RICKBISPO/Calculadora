import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent implements OnInit {

  @Input() buttonColor: string = "";
  @Input() buttonContent: string | number = "";
  @Input() buttonValue: string | number = "";

  @Output() buttonClicked = new EventEmitter<number | string>();

  ngOnInit(): void {
    this.buttonColor = `btn btn-${this.buttonColor}`;
  }

  onButtonClick(value?: string | number) {
    if (value) {
      this.buttonClicked.emit(value);
    } else {
      this.buttonClicked.emit();
    }
  }

}
