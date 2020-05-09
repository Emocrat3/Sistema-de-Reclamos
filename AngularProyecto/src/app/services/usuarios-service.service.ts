import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from 'src/models/Usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpClient: any;
  baseUrl: any;

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuarios[]>{
    const suffix = '/reclamos/usuario'
    return this.http.get<Usuarios[]>(this.URL+suffix);
  }

  obtenerUsuariosPorID(rut: number): Observable<Usuarios> {
    const suffix = '/reclamos/usuario/'
    return this.http.get<Usuarios>(this.URL+suffix+rut);
  }

  registrarUsuario(usuarios: Usuarios) {
    const suffix = '/registrarUsuario'
    return this.http.post<Usuarios>(this.URL+suffix, usuarios, this.httpOptions);
  }

  loginUsuario(usuarios: Usuarios): Observable<Usuarios> {
    const suffix = '/loginUsuario/'
    return this.http.post<Usuarios>(this.URL+suffix, usuarios, this.httpOptions);
  }

  darBajaUsuario(rut: number) {
    const suffix = '/editarCuentaUsuario/'
    return this.http.delete(this.URL+suffix+rut, this.httpOptions);
  }

}

