import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/models/Admin';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  loginAdmin(admin: Admin): Observable<Admin> {
    const suffix = '/loginAdmin/'
    return this.http.post<Admin>(this.URL+suffix, admin, this.httpOptions);
  }

  logoutUsuario(){
    localStorage.removeItem("usuario");
    return null;
   }

   obtenerAdminPorId(rut:number): Observable<Admin>{
    const suffix = '/editarAdmin/'
    return this.http.get<Admin>(this.URL+suffix+rut)
  }

   public isAuthenticated(): boolean{
    if(localStorage.getItem('usuario') == 'null' || isNullOrUndefined(localStorage.getItem('usuario'))){
      return false;
    }else{
      return true;
    }
  }
  editarCuentaAdmin(admin: Admin) {
    const suffix = '/editarCuentaAdmin/'
    return this.http.put<Admin>(this.URL+suffix, admin, this.httpOptions);
  }
  darBajaAdmin(rut: number) {
    const suffix = '/DarDeBajaAdmin/'
    return this.http.post(this.URL+suffix+rut, this.httpOptions);
  }


}
