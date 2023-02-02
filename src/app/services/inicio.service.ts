import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Inicio} from '../interface/inicio'
@Injectable({
  providedIn: 'root'
})
export class InicioService {
  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/all`);
  }

}
