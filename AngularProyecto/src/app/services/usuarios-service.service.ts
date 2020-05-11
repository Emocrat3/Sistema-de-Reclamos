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

  constructor(private http: HttpClient) {}

  registrarUsuario(usuarios: Usuarios) {
    const suffix = '/registrarUsuario'
    return this.http.post<Usuarios>(this.URL+suffix, usuarios, this.httpOptions);
  }
  obtenerUsuarioPorId(rut:number): Observable<Usuarios>{
    const suffix = '/editarc/'
    return this.http.get<Usuarios>(this.URL+suffix+rut)
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
  editarCuentaUsuario(usuario: Usuarios) {
    const suffix = '/editarCuentaUsuario/'
    return this.http.put<Usuarios>(this.URL+suffix, usuario, this.httpOptions);
  }
  darBajaUsuario(rut: number) {
    const suffix = '/editarCuentaUsuario/'
    return this.http.delete(this.URL+suffix+rut, this.httpOptions);
  }
}

