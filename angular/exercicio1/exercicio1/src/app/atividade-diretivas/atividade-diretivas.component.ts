import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade-diretivas',
  templateUrl: './atividade-diretivas.component.html',
  styleUrls: ['./atividade-diretivas.component.scss']
})
export class AtividadeDiretivasComponent implements OnInit {

  botao = false;

  itemClicado: string;

  itens = [
    {descricao: 'Home', link: '#'},
    {descricao: 'Link', link: '#'},

  ];

  constructor() { }

  ngOnInit() {
  }

  mudarTitulo() {
    this.botao = !this.botao;
  }

}
