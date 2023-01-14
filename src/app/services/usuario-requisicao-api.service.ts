import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interface/login-interface';
import { RegistroInterface } from '../interface/registro-interface';
import { PerfilInterface } from '../interface/perfil-interface';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';

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

  mudarSenhaRequest(senha: FormData): void {
    let token = localStorage.getItem("Token");
    this.client.put(this.URL_SERVER + "mudar/senha", senha, { withCredentials: true, headers: { 'Authorization': 'Bearer ' + token  } }).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    })
  }

  mudarEmailRequest(email: FormData): void {
    let token = localStorage.getItem("Token");
    this.client.put(this.URL_SERVER + "mudar/email", email, { withCredentials: true, headers: { 'Authorization': 'Bearer ' + token  } }).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    })
  }
}
