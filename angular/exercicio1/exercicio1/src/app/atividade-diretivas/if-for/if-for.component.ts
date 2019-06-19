import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-for',
  templateUrl: './if-for.component.html',
  styleUrls: ['./if-for.component.scss']
})
export class IfForComponent implements OnInit {

  imprimiP = false;

  itens = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

  constructor() { }

  ngOnInit() {
  }

}
