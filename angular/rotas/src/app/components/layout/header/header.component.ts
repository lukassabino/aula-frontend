import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus = [
    {link: 'home', descricao: 'Home'},
    {link: 'fornecedor', descricao: 'Cadastro de Fornecedor'},
    {link: 'produto', descricao: 'Cadastro de Produto'},
    {link: 'cliente', descricao: 'Cadastro de Cliente'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
