import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamos } from 'src/models/Reclamos';
import { Respuesta } from 'src/models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {
  [x: string]: any;


  private URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  
  obtenerReclamos(): Observable<Reclamos[]>{
    const suffix = '/reclamos/usuario'
    return this.http.get<Reclamos[]>(this.URL+suffix);
  }
  obtenerReclamoPorID(num_reclamo: number): Observable<Reclamos> {
    const suffix = '/reclamos/usuario/'
    return this.http.get<Reclamos>(this.URL+suffix+num_reclamo);
  }

  obtenerReclamosPorRut(rut:number): Observable<Reclamos[]> {
    const suffix = '/reclamos/usuarioRut/'
    return this.http.get<Reclamos[]>(this.URL+suffix+rut);
  }

  insertarReclamo(recl: Reclamos) {
    const suffix = '/insertarReclamo/Usuario'
    return this.http.post<Reclamos>(this.URL+suffix, recl, this.httpOptions);
  }

  editarReclamos(recl: Reclamos) {
    const suffix = '/editarReclamo/'
    return this.http.put<Reclamos>(this.URL+suffix, recl, this.httpOptions);
  }

  responderReclamo(num_reclamo: number) {
    return this.http.post(this.URL+num_reclamo, this.httpOptions);
  }

  insertarRespuesta(respuesta : Respuesta) {
    const suffix = '/ADMIN/pendientes/respuesta'
    return this.http.post(this.URL+suffix, respuesta, this.httpOptions);
  }

  obtenerReclamoPorIDAdmin(num_reclamo: number): Observable<Reclamos>{
    const suffix = '/filtrarReclamoPorID/admin/'
    return this.http.get<Reclamos>(this.URL+suffix+num_reclamo);
  }
}
