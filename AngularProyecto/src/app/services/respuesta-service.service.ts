import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from 'src/models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  httpClient: any;
  respuesta: any;

  constructor(private http: HttpClient) { }

  

}
