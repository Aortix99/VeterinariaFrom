import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Especie } from '../interface/especie';
import { Raza } from '../interface/raza';
import { EspecieService } from '../services/especie.service';
import { RazaService } from '../services/raza.service';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css']
})
export class RazaComponent  implements OnInit{
  buscar='';
  RazaV:Array<Raza>=[];
  myForm!: FormGroup;
constructor(private fb: FormBuilder, private http: HttpClient,private razaS: RazaService){}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      idRaza:[''],
      raza:[''],

    });
    let arrayInicio : Array<Especie>=[];
    this.razaS.getall().subscribe(datos=>{
      this.RazaV=datos.data;
      console.log(datos);
    });

  }
  guardar(form: FormGroup){
    this.razaS.create(form.value)
     .subscribe(data => {

      this.refresh();
    }
     )
  }
  refresh(){
    let arrayCliente: Array<Raza>=[];
    this.razaS.getall().subscribe(datos=>{
      this.RazaV=datos.data;

    })
  }
  editar(datos:{  idRaza: any;raza:any}){
    this.myForm.setValue({
      idRaza:datos.idRaza,
      raza: datos.raza,
    })
  }

  confirmar(nmid: number){
    var r = confirm("¿seguro que desea eliminar?");
    if (r == true) {
      this.razaS.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se elimino");
    }
    }



}
