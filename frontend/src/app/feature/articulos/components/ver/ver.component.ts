import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticulosService } from '../../shared/articulos.service';
import { Articulo} from '../../shared/articulo';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  articulo: Articulo ={
    source: null,      
    author: '',      
    title: '',       
    description: '', 
    url: '',         
    urlToImage: '',  
    publishedAt: null, 
    content: '',     
  }

  

 

  constructor(private articulosService: ArticulosService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({title})=> this.articulosService.getArticulosTitle(title))
      )
      .subscribe((articulo)=>{this.articulo = articulo}), console.log(this.articulo);
      

    // this.articulosService.getArticulosTitle(this.articulo) ;
        
        // .subscribe(resp =>console.log(resp)
        
  }

}
