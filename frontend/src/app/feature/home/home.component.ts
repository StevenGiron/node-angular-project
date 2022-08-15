import { Component, OnInit } from '@angular/core';
import { HomeService } from './shared/home.service';
import { Usuario } from './shared/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] =[]

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getUsuarios()
    .subscribe((usuarios) =>{this.usuarios = usuarios})
    
  }

}
