import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Output() pesquisa = new EventEmitter<HTMLElement>();

  constructor() { }

  ngOnInit() {
  }

  enviar(value){
    this.pesquisa.emit(value);
  }
}
