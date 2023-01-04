import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interface/login-interface';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { RegistroInterface } from '../interface/registro-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequisicaoApiService {
  URL_SERVER: string = 'https://localhost:7209/api/Usuario/';

  constructor(private client: HttpClient) { }

  loginRequest(requestForm: FormData): void {
    this.client.post<LoginInterface>(this.URL_SERVER + 'login', requestForm).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
  }

  registrarRequest(requestForm: FormData): void { 
    this.client.post<RegistroInterface>(this.URL_SERVER +'registrar', requestForm).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    })
  }
}
