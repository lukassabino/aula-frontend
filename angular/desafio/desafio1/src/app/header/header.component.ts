import { DesafioServiceService } from './../services/desafio-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  texto = '';

  ngOnInit() {
  }

  constructor(
    private service: DesafioServiceService
  ) {
    this.texto = service.insereTitulo();
  }
}

