import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Paciente} from '../interface/paciente'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/paciente/all`);
  }

  create( x: Paciente) {
    return this.servicio.post<Paciente>(`${this.servidor}/paciente/save`,x);
  }
  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/paciente/delete/${id}`);
  }


}
