import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioRequisicaoApiService } from 'src/app/services/usuario-requisicao-api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = this.formBuilder.group({
    foto: "",
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    idade: 0,
  }) 

  constructor(private formBuilder: FormBuilder, private service: UsuarioRequisicaoApiService) { }

  ngOnInit(): void {
  }

  transformarEmFormData(): FormData {
    var formData = new FormData();
    formData.append("foto", this.registroForm.get("foto")?.value);
    formData.append("nome", this.registroForm.get("nome")?.value);
    formData.append("sobrenome", this.registroForm.get("sobrenome")?.value);
    formData.append('email', this.registroForm.get('email')?.value);
    formData.append('senha', this.registroForm.get('senha')?.value);
    formData.append('idade', this.registroForm.get('idade')?.value);
    return formData;
  }

  enviarRegistro(): void {
    var formulario: FormData = this.transformarEmFormData();
    this.service.registrarRequest(formulario);
    this.registroForm.reset();
  }

}
