import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoInterface } from '../interface/produto-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoRequisicaoApiService {
  URL_SERVER: string = 'https://localhost:7209/api/Produto/';

  constructor(private client: HttpClient) { }

  selecionarProdutosPorCategoriaRequest(categoriaRequest: string): Observable<ProdutoInterface[]> {
    return this.client.get<ProdutoInterface[]>(this.URL_SERVER + categoriaRequest);
  }
}
