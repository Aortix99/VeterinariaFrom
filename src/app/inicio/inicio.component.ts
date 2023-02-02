import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { InicioService } from '../services/inicio.service';
import {Inicio} from '../interface/inicio';
import { NgModel } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  implements OnInit{
  buscar='';
  InicioV:Array<Inicio>=[];
  myForm!: FormGroup;
constructor(private fb: FormBuilder, private http: HttpClient,private inicioS: InicioService){}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      identificacion:[''],
      Nombre:[''],
      raza:[''],
      especie:[''],
      Npaciente:[''],
      FechaRe:[''],
      telefono:[''],
      ciudad:[''],
      direccion:[''],
      NombreMascota:[''],
    });
    let arrayInicio : Array<Inicio>=[];
    this.inicioS.getall().subscribe(datos=>{
      this.InicioV=datos.data;
      console.log(datos);
    })
  }

}

