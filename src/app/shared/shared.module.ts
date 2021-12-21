import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from './pipes/number-format.pipe';



@NgModule({
  declarations: [
    NumberFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
