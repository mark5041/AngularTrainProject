import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Utente } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private utente!: Utente;
  private baseUrl: string = 'http://127.0.0.1:8080';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
      'Content-Type' : 'application/json'
    })
  }
  constructor(private _http: HttpClient) { }

  login(userEmail: string, userPassword: string): Observable<any> {

    return this._http.get<{ [key: string]: Utente }>(this.baseUrl + '/login',
      {
        headers: this.httpOptions.headers, params:
        {
          'email': userEmail,
          'password': userPassword
        }
      }).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('errore nel login')));
  }
  
  private errorHandler<T>(operation = "Operazione", result?:T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
