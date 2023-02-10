import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactorialComponent } from './factorial/factorial.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FactorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FactorialComponent
  ]
})
export class MathsModule { }
