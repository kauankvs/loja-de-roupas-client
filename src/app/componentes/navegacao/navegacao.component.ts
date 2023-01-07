import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  categorias = [{nome: 'camisa', nomeDisplay: 'Camisas', categoriaRequest: 'Camisa'},
                {nome: 'casaco', nomeDisplay: 'Casacos', categoriaRequest: 'Casaco'},
                {nome: 'moletom', nomeDisplay: 'Moletons', categoriaRequest: 'Moletom'},
                {nome: 'calca', nomeDisplay: 'Calças', categoriaRequest: 'Calca'},
                {nome: 'short', nomeDisplay: 'Shorts', categoriaRequest: 'Short'}, 
                {nome: 'intima', nomeDisplay: 'Íntima', categoriaRequest: 'Intima'},
                {nome: 'acessorio', nomeDisplay: 'Acessórios', categoriaRequest: 'Acessorio'},
                {nome: 'beleza', nomeDisplay: 'Beleza', categoriaRequest: 'Beleza'}]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarParaCategoria(categoria: any) {
    this.router.navigate(['/categoria', categoria.nome], {state: {categoriaRequest: categoria.categoriaRequest}});
  }

}
