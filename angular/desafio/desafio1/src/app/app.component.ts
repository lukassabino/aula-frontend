import { Component } from '@angular/core';
import { DesafioServiceService } from './services/desafio-service.service';
import { CadastrosComponent } from './cadastros/cadastros.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio1';

  constructor(
    private service: DesafioServiceService
  ) {
    this.title = service.insereTitulo();
  }
}
