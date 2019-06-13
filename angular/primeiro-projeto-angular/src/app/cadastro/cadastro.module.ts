import { FormularioModule } from './../formulario/formulario.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormularioComponent } from '../formulario/formulario.component';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FormularioModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
