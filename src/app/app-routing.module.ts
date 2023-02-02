import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuenoComponent } from './dueno/dueno.component';
import { EspecieComponent } from './especie/especie.component';
import { InicioComponent } from './inicio/inicio.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RazaComponent } from './raza/raza.component';


const routes: Routes = [
  {path: 'dueno', component: DuenoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'raza', component: RazaComponent},
  {path: 'especie', component: EspecieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
