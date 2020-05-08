import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamos } from 'src/models/Reclamos';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {


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

  insertarReclamo(recl: Reclamos) {
    const suffix = '/insertarReclamo/Usuario'
    return this.http.post<Reclamos>(this.URL+suffix, recl, this.httpOptions);
  }

  editarReclamos(recl: Reclamos) {
    const suffix = '/editarReclamo/'
    return this.http.put<Reclamos>(this.URL+suffix, recl, this.httpOptions);
  }

  borrarReclamo(num_reclamo: number) {
    return this.http.delete(this.URL+num_reclamo, this.httpOptions);
  }
}
