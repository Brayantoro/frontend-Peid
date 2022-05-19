import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Panel de control',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Perfil de usuario',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Listar tablas',  icon:'pe-7s-note2', class: '' },
    { path: '/formulario', title: 'Formulario ',  icon:'pe-7s-note', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
