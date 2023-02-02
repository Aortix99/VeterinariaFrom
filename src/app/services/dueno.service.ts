import { Injectable } from '@angular/core';
import{ Dueno } from '../interface/dueno'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DuenoService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/dueno/all`);
  }

  create( x: Dueno) {
    return this.servicio.post<Dueno>(`${this.servidor}/dueno/save`,x);
  }
  delete(id: number): Observable<any> {
    return this.servicio.delete(`${this.servidor}/dueno/delete/${id}`);
  }

}
