import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  templateUrl: './properties-binding.component.html',
  styleUrls: ['./properties-binding.component.scss']
})
export class PropertiesBindingComponent implements OnInit {

  tituloTela = 'Cadastro de Pessoa';
  textoDigitado: string;

  constructor() { }

  ngOnInit() {
  }

  onChangePai(event) {
    console.log('Componente pai', event);
    this.textoDigitado = event;
  }
}
