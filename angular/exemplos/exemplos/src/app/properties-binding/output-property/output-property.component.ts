import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {
  @Output() search = new EventEmitter<HTMLElement>();

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    console.log('Componente Filho', value);
    this.search.emit = value;
  }
}
