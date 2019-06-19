import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  templateUrl: './properties-binding.component.html',
  styleUrls: ['./properties-binding.component.scss']
})
export class PropertiesBindingComponent implements OnInit {
  recebePesquisa: string;
  tituloInicial = 'Titulo passado pelo pai';

  constructor() { }

  ngOnInit() {
  }

  receberValor(value) {
    this.recebePesquisa = value;
    console.log(value);
  }
}
