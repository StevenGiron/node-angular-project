import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Usuario[]>{          
    return this.http.get<Usuario[]>(`${environment.endpoint}/usuarios`)
  }
}
