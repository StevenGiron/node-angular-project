import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'noticas', routerLink: ['/articulo', 'listado'], icon: 'pi pi-fw pi-car'},
      {label: 'Salir', routerLink: ['/home'], icon: 'pi pi-fw pi-home'},
  ];
  
  }
}
