import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../interface/produto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoRequisicaoApiService {
  URL_SERVER: string = 'https://localhost:7209/api/Produto/';

  constructor(private client: HttpClient) { }

  selecionarProdutosPorCategoriaRequest(categoria: string) {
    this.client.get<ProdutoInterface>(this.URL_SERVER + categoria);
  }
}
