import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-manual',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>

  `
})
export class ComponenteManualComponent {
  title = 'Lista de Itens';

}
