import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Paciente } from '../interface/paciente';
import { Raza } from '../interface/raza';
import { PacienteService } from '../services/paciente.service';
import { RazaService } from '../services/raza.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent  implements OnInit{
  buscar='';
  PacienteV:Array<Paciente>=[];
  idRV:Array<Raza>=[];
  myForm!: FormGroup;
constructor( private fb: FormBuilder, private http: HttpClient,private pacienteS: PacienteService, private razaS: RazaService){}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      idPaciente:[''],
      nombre:[''],
      feNaMascota:[''],
      feRegistro:[''],
      idEspecie:[''],
      idRaza:[''],
    });
    let arrayPaciente : Array<Paciente>=[];
    this.pacienteS.getall().subscribe(datos=>{
      this.PacienteV=datos.data;
      console.log(datos);
    })

    let arrayRaza : Array<Paciente>=[];
    this.razaS.getall().subscribe(datos=>{
      this.idRV=datos.data;
      console.log(datos);
    })
  }


  guardar(form: FormGroup){
    this.pacienteS.create(form.value)
     .subscribe(data => {

      this.refresh();
    }
     )
  }
  refresh(){
    let arrayCliente: Array<Paciente>=[];
    this.pacienteS.getall().subscribe(datos=>{
      this.PacienteV=datos.data;

    })
  }
  editar(datos:{  idPaciente: any; nombre:any; feNaMascota:any; feRegistro : any; idEspecie:any; idRaza:any;}){
    this.myForm.setValue({
      idPaciente:datos.idPaciente,
      nombre: datos.nombre,
      feNaMascota: datos.feNaMascota,
      feRegistro:datos.feRegistro,
      idEspecie:datos.idEspecie,
      idRaza:datos.idRaza,

    })
  }

  confirmar(nmid: number){
    var r = confirm("¿seguro que desea eliminar?");
    if (r == true) {
      this.pacienteS.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se elimino");
    }
    }


}

