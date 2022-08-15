import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    PrimengModule,
    NavbarComponent
  ]
})
export class CoreModule { }
