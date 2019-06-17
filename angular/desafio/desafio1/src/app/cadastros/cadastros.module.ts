import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrosComponent } from './cadastros.component';

@NgModule({
  declarations: [CadastrosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CadastrosComponent
  ]
})
export class CadastrosModule { }
