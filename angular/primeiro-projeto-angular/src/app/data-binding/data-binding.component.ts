import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  titulo = 'Data Binding';
  enderecoImg = 'https://picsum.photos/id/237/200/300';

  nome = 'João';
  cidade: ' ';
  sobrenome: '';

  buscaNome() {
    return 'Maria';
  }

  onClick()  {
    console.log('Clicou');
    }

  capturaTexto(event) {
    console.log(event.target.value);
    this.cidade = event.target.value;
  }

//   setaSobrenome() {
//     console.log()
//   }
// }
}
