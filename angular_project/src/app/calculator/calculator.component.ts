import { Component, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';



@Component({
  selector: 'app-calculator',
  imports: [MatButtonModule, FlexLayoutModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  displayValue = '';
}
