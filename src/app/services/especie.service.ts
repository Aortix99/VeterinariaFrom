import { Injectable } from '@angular/core';
import { Especie } from '../interface/especie'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {


  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/especie/all`);
  }

  create( x: Especie) {
    return this.servicio.post<Especie>(`${this.servidor}/especie/save`,x);
  }
  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/especie/delete/${id}`);
  }
}
