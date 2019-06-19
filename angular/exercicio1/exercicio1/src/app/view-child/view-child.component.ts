import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('nome', {static: false}) nome: ElementRef;

  @ViewChild('texto', {static: false}) texto: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {

  }

  enviar() {
    console.log(this.nome);
    console.log(this.nome.nativeElement);
    // this.texto.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(this.texto.nativeElement, 'background-color', 'yellow');
  }

}
