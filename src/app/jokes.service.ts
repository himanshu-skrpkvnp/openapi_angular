import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
   
  url = 'https://icanhazdadjoke.com' ;
  constructor( private http : HttpClient ) {}
  getJoke() : Observable <any> {

    return this.http.get( this.url  , { headers: { Accept: 'application/json' } }) ;
  }
}
