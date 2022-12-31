import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interface/login-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequisicaoApiService {
  URL_SERVER = 'http://localhost:8080/Usuario/'

  constructor(private client: HttpClient) { }

  loginRequest(requestForm: FormData) {
    return this.client.post<LoginInterface>(this.URL_SERVER + 'login', requestForm).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }
}
