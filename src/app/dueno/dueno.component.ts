import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dueno } from '../interface/dueno';
import { Paciente } from '../interface/paciente';
import { DuenoService } from '../services/dueno.service';
import { PacienteService } from '../services/paciente.service';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.css']
})
export class DuenoComponent  implements OnInit{
  buscar='';
  DuenoV:Array<Dueno>=[];

  myForm!: FormGroup;
constructor(private fb: FormBuilder, private http: HttpClient,private duenoS: DuenoService){}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      identificacion:[''],
      tipoIdDueno:[''],
      telefono:[''],
      ciudad:[''],
      direccion:[''],
      nombre:[''],
      idPaciente:[''],

    });
    let arrayInicio : Array<Dueno>=[];
    this.duenoS.getall().subscribe(datos=>{
      this.DuenoV=datos.data;
      console.log(datos);
    })

  }


  guardar(form: FormGroup){
    this.duenoS.create(form.value)
     .subscribe(data => {

      this.refresh();
    }
     )
  }
  refresh(){
    let arrayCliente: Array<Dueno>=[];
    this.duenoS.getall().subscribe(datos=>{
      this.DuenoV=datos.data;

    })
  }
  editar(datos:{  identificacion: any;tipoIdDueno:any; telefono: any;ciudad:any; direccion: any;nombre:any;idPaciente: any;}){
    this.myForm.setValue({
      identificacion:datos.identificacion,
      tipoIdDueno: datos.tipoIdDueno,
      telefono:datos.telefono,
      ciudad: datos.ciudad,
      direccion:datos.direccion,
      nombre: datos.nombre,
      idPaciente: datos.idPaciente,
    })
  }

  confirmar(nmid: number){
    var r = confirm("¿seguro que desea eliminar?");
    if (r == true) {
      this.duenoS.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se elimino");
    }
    }





}



