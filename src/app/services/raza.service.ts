import { Injectable } from '@angular/core';
import { Raza } from '../interface/raza'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RazaService {


  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/raza/all`);
  }

  create( x: Raza) {
    return this.servicio.post<Raza>(`${this.servidor}/raza/save`,x);
  }
  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/raza/delete/${id}`);
  }
}
