import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoInterface } from 'src/app/interface/produto-interface';
import { ProdutoRequisicaoApiService } from 'src/app/services/produto-requisicao-api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  produtosPorCategoria?: ProdutoInterface[];

  constructor(private service: ProdutoRequisicaoApiService) { }

  ngOnInit(): void {
    const categoriaRequest: string = history.state.categoriaRequest;
    this.service.selecionarProdutosPorCategoriaRequest(categoriaRequest).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }

}
