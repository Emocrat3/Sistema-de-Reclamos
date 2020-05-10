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

   public isAuthenticated(): boolean{
    if(localStorage.getItem('usuario') == 'null' || isNullOrUndefined(localStorage.getItem('usuario'))){
      return false;
    }else{
      return true;
    }
  }
}
