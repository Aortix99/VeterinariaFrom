import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Especie } from '../interface/especie';
import { EspecieService } from '../services/especie.service';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit{
  buscar='';
  EspecieV:Array<Especie>=[];
  myForm!: FormGroup;
constructor(private fb: FormBuilder, private http: HttpClient,private especieS: EspecieService){}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      idEspecie:[''],
      especie:[''],


    });
    let arrayInicio : Array<Especie>=[];
    this.especieS.getall().subscribe(datos=>{
      this.EspecieV=datos.data;
      console.log(datos);
    });

  }


  guardar(form: FormGroup){
    this.especieS.create(form.value)
     .subscribe(data => {

      this.refresh();
    }
     )
  }
  refresh(){
    let arrayCliente: Array<Especie>=[];
    this.especieS.getall().subscribe(datos=>{
      this.EspecieV=datos.data;

    })
  }
  editar(datos:{  idEspecie: any;especie:any}){
    this.myForm.setValue({
      idEspecie:datos.idEspecie,
      especie: datos.especie,
    })
  }

  confirmar(nmid: number){
    var r = confirm("¿seguro que desea eliminar?");
    if (r == true) {
      this.especieS.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se elimino");
    }
    }



}



