import { Component, OnInit } from '@angular/core';
import { PerfilInterface } from 'src/app/interface/perfil-interface';
import { UsuarioRequisicaoApiService } from 'src/app/services/usuario-requisicao-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilDisplay?: PerfilInterface;

  constructor(private service: UsuarioRequisicaoApiService, private router: Router) { }

  ngOnInit(): void {
    this.service.displayContaRequest().subscribe((data: PerfilInterface) => this.perfilDisplay = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      foto: data.foto,
      email: data.email,
      nivel: data.nivel,
      dataDeCriacao: data.dataDeCriacao
    });

    if(this.perfilDisplay == null) 
      this.router.navigate(["/login"]);
  }

  

}
