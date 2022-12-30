import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = this.formBuilder.group({
    nome: "",
    sobrenome: "",
    email: "",
    foto: "",
    senha: "",
    idade: 0,
  }) 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
