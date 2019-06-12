import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string ;
  saldo: number;
  isMostraSaldo: boolean;


  constructor() {
    this.title = 'Topo';
    this.saldo = 450000.00;
    this.isMostraSaldo = true;
  }

  ngOnInit() {
  }

}
