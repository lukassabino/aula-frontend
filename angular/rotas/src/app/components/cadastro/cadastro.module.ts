import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatSliderModule
  ]
})
export class CadastroModule { }
