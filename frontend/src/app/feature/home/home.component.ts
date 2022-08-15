import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HomeService } from './shared/home.service';
import { Usuario } from './shared/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] =[]
  username: string ='';
  password: string ='';
  usuariosDB: Usuario[] =[];

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.homeService.getUsuarios()
    .subscribe((usuarios) =>{this.usuarios =usuarios})
    
  }

  ingresar(){
    this.usuariosDB = [...this.usuarios]
    this.usuariosDB = this.usuarios.filter(usu => usu.usuario === this.username && usu.contraseña === this.password)
    if (this.usuariosDB.length == 0){
      window.alert('no existe el usuario')
    }else{
      this.router.navigate(['/articulo'])
    }
    
  }

}
