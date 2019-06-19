import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-view-child-exercicio',
  templateUrl: './view-child-exercicio.component.html',
  styleUrls: ['./view-child-exercicio.component.scss']
})
export class ViewChildExercicioComponent implements OnInit {

  @ViewChild('alteracor', {static: false}) alteracor: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  alteracores() {
    this.renderer.setStyle(this.alteracor.nativeElement, 'background-color', 'yellow');
  }
}
