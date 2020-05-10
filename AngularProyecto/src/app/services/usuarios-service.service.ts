import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from 'src/models/Usuarios';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

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

  registrarUsuario(usuarios: Usuarios) {
    const suffix = '/registrarUsuario'
    return this.http.post<Usuarios>(this.URL+suffix, usuarios, this.httpOptions);
  }

  loginUsuario(usuario: Usuarios): Observable<Usuarios> {
    const suffix = '/loginUsuario/'
    return this.http.post<Usuarios>(this.URL+suffix, usuario, this.httpOptions);
  }

  logoutUsuario(){
   localStorage.removeItem("usuario");
   return null;
  }

  public isAuthenticated(): boolean{
    if(localStorage.getItem('usuario') == 'null' || isNullOrUndefined(localStorage.getItem('usuario'))){
      return false;
    }else{
      return true;
    }
  }

  darBajaUsuario(rut: number) {
    const suffix = '/editarCuentaUsuario/'
    return this.http.delete(this.URL+suffix+rut, this.httpOptions);
  }

}

