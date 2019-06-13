import { Component } from '@angular/core';
import { PrimeiroServicoService } from './services/primeiro-servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-projeto-angular';


  constructor(
    private service: PrimeiroServicoService
  ) {
    this.title = service.getTitulo();
  }
}
