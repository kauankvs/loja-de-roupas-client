import { TestBed } from '@angular/core/testing';

import { UsuarioRequisicaoApiService } from './usuario-requisicao-api.service';

describe('UsuarioRequisicaoApiService', () => {
  let service: UsuarioRequisicaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioRequisicaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
