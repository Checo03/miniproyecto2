import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  urlAPI="https://enfermedades.free.beeceptor.com";

  constructor(private http:HttpClient) { }
  
  retornar() {
    return this.http.get(this.urlAPI).pipe(take(1));
  }
}
