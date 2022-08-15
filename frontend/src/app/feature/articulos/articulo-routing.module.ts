import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ListadoComponent } from './components/listado/listado.component';
import { VerComponent } from './components/ver/ver.component';


const routes: Routes = [
 {
   path: '',
   component: ArticuloComponent,
   children: [
     {
      path: 'noticias',
      component: ListadoComponent
     },
     {
      path: 'ver/:title',
      component: VerComponent
     },
     {
       path: '**',
       redirectTo: 'noticias'
     }
   ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule { }
