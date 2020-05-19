import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mail } from 'src/models/Mail';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class MailService {
  private URL = 'http://localhost:8080/api'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  reportarProblema(mail : Mail): Observable<Mail>{
    const suffix = '/reportarproblema'
    return this.http.post<Mail>(this.URL+suffix, mail, this.httpOptions)
    }
}
