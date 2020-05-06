import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL = 'localhost:8080/api'

  constructor(private http: HttpClient) {}

}
