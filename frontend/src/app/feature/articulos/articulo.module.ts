import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { ListadoComponent } from './components/listado/listado.component';
import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { TarjetaArticuloComponent } from './components/tarjeta-articulo/tarjeta-articulo.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerComponent } from './components/ver/ver.component';
import { AuthModule } from '../../auth/auth.module';





@NgModule({
  declarations: [
    ListadoComponent,
    ArticuloComponent,
    TarjetaArticuloComponent,
    VerComponent

    
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    SharedModule,
    FlexLayoutModule, 
    AuthModule
  ]
})
export class ArticuloModule { }
