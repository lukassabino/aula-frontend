import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent {
  erro: string;

  verifica(value)  {
    if (!value) {
      this.erro = 'Campo com preenchimento obrigatorio';
    } else {
      this.erro = '';
    }
  }
}
