import { Component, OnInit } from '@angular/core';
import { ExercicioServicoService } from '../services/exercicio-servico.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  texto = 'teste';



  ngOnInit() {
  }

  alerta() {
    alert('Oi');
  }



  constructor(
    private service: ExercicioServicoService
  ) {
    this.texto = service.getParagrafo();
  }
}

