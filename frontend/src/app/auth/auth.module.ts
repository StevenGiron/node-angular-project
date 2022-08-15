import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { PrimengModule } from '../core/core/primeng.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    AuthRoutingModule,
    FlexLayoutModule
  ]
})
export class AuthModule {}
