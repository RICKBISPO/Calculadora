import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnDestroy {
  
  @Input() alertClass = "";
  @Input() alertContent = "";

  ngOnDestroy(): void {
    console.log("Alerta Removido!");
  }

}
