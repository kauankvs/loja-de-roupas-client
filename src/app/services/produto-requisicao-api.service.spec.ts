import { TestBed } from '@angular/core/testing';

import { ProdutoRequisicaoApiService } from './produto-requisicao-api.service';

describe('ProdutoRequisicaoApiService', () => {
  let service: ProdutoRequisicaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoRequisicaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
