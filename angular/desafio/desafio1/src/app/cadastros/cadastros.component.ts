import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent {
  erro: string;
  mouseOver = false;

  verifica(value)  {
    if (value) {
      this.erro = '';
    } else {
      this.erro = 'Campo com preenchimento obrigatorio';
    }
  }
  onHover() {
    this.mouseOver = !this.mouseOver;
  }

}
