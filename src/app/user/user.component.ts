import { Component, OnInit ,AfterViewInit } from '@angular/core';
import { Usuario } from 'app/models/usuario.interface';
import { ServicioService } from 'app/Servicio/servicio.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,AfterViewInit{

  usuarios:Usuario[];
  constructor(private servicioUsu:ServicioService) {
   
   }
 
  ngOnInit() {
    this.listarTareas();
  }

  listarTareas(){
    this.servicioUsu.getUsuario().subscribe(
      res =>{this.usuarios=res},
    error => console.log(error) 
    );
  }

  ngAfterViewInit(): void {

  }

 


}
