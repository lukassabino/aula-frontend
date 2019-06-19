import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-primeira-parte',
  templateUrl: './diretivas-primeira-parte.component.html',
  styleUrls: ['./diretivas-primeira-parte.component.scss']
})
export class DiretivasPrimeiraParteComponent implements OnInit {

  link = 'primeiro';

  menus = [
    {descricao: 'Home', link: 'home'},
    {descricao: 'Pessoa', link: 'pessoa'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
