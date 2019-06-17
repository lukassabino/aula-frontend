import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-atividade1',
  templateUrl: './atividade1.component.html',
  styleUrls: ['./atividade1.component.scss']
})
export class Atividade1Component {


  titulo = 'Data Binding';
  enderecoImg = 'https://picsum.photos/id/2/200/300?grayscale';

  nome = '';
  email = '';
  fone: '';

  onClick()  {
    alert('Formulario enviado com sucesso!');
    }
  }


