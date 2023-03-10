import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "categoria/:categoria", component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
