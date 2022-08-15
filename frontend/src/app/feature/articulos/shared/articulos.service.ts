import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Articulo } from './articulo';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ArticulosService {


  constructor(
    private http: HttpClient
  ) {}

  getArticulos():Observable<Articulo[]>{    

    return this.http.get<Articulo[]>(`${environment.endpoint}/noticias`)
  }

  getArticulosTitle(title:any): Observable<Articulo>{       
    return this.http.get<Articulo>(`${environment.endpoint}/noticias/${title.trim()}`)
  }
}
