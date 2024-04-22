import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
   
  url = 'https://icanhazdadjoke.com' ;
  apiKey = environment.apiKey ;
  constructor( private http : HttpClient ) {}
  getJoke() : Observable <any> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get( this.url  , { headers}) ;
  }
}
