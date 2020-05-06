import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamos } from 'src/models/Reclamos';

@Injectable({
  providedIn: 'root'
})
export class ReclamosService {


  private URL = 'localhost:8080/api'

  constructor(private http: HttpClient) { }

  
  obtenerReclamos(): Observable<Reclamos[]>{
    const suffix = '/reclamos/usuario'
    return this.http.get<Reclamos[]>(this.URL+suffix);
  }
}
