import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DuenoComponent } from './dueno/dueno.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { InicioPipe } from './pipe/inicio.pipe';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PacienteComponent } from './paciente/paciente.component';
import { RazaComponent } from './raza/raza.component';
import { EspecieComponent } from './especie/especie.component';
import { RazaPipe } from './pipe/raza.pipe';
import { EspeciePipe } from './pipe/especie.pipe';
import { DuenoPipe } from './pipe/dueno.pipe';
import { PacientePipe } from './pipe/paciente.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DuenoComponent,
    InicioPipe,
    PacienteComponent,
    RazaComponent,
    EspecieComponent,
    RazaPipe,
    EspeciePipe,
    DuenoPipe,
    PacientePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
