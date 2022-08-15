import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../shared/articulo';
import { ArticulosService } from '../../shared/articulos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(
    private articulosService: ArticulosService
  ){

  }
  ngOnInit(): void {
    this.articulosService.getArticulos()
    .subscribe((articulos) =>{ this.articulos = articulos})
    
  }

}
