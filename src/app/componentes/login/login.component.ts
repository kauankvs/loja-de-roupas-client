import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioRequisicaoApiService } from 'src/app/services/usuario-requisicao-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
      email: '',
      senha: '',
    });

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioRequisicaoApiService)
    { }

  ngOnInit(): void { }

  transformarEmFormData(): FormData {
    var formData = new FormData();
    formData.append('email', this.loginForm.get('email')?.value);
    formData.append('senha', this.loginForm.get('senha')?.value);
    return formData;
  }

  enviarFormulario(): void {
    let formData: FormData = this.transformarEmFormData();
    this.service.loginRequest(formData);
    this.loginForm.reset();
  }
}
