import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  categorias: string[] = ['Camisa', 'Casaco', 'Moletom', 'Calca', 'Short', 'Intima', 'Acessorio', 'Beleza'];

  constructor() { }

  ngOnInit(): void {
  }

}
