import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interface/login-interface';
import { RegistroInterface } from '../interface/registro-interface';
import { PerfilInterface } from '../interface/perfil-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequisicaoApiService {
  URL_SERVER: string = 'https://localhost:7209/api/Usuario/';

  constructor(private client: HttpClient) { }

  loginRequest(requestForm: FormData): void {
    this.client.post(this.URL_SERVER + 'login', requestForm, { responseType: 'text' }).subscribe({
    next: (response) => { 
      console.log(response);
      localStorage.setItem("Token", response);
    },
    error: (response) => console.log(response)
  })
  }

  registrarRequest(requestForm: FormData): void { 
    this.client.post(this.URL_SERVER + 'register', requestForm ).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    })
  }

  displayContaRequest(): Observable<PerfilInterface> {
    let token = localStorage.getItem("Token");
    return this.client.get<PerfilInterface>(this.URL_SERVER + "conta", { withCredentials: true, headers: { 'Authorization': 'Bearer ' + token  } });
  }
}
