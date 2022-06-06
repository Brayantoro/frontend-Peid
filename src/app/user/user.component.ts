import { Component, OnInit ,AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Usuario } from 'app/models/usuario.interface';
import { ServicioService } from 'app/Servicio/servicio.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,AfterViewInit{
  id:string

  usuarios:Usuario[];
  codigo:FormControl =new FormControl('')
  nombre:FormControl =new FormControl('')
  email:FormControl =new FormControl('')
  password:FormControl =new FormControl('')

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

agregarUsuario(){
let codigo=this.codigo.value
let nombre=this.nombre.value
let email=this.email.value
let password=this.password.value

  this.servicioUsu.saveUsuario(codigo,nombre,email,password).subscribe(
    res =>{console.log(res);
    },
  error => console.log(error) 
  );
}

ObtenerUsuario(id:string):void{
this.servicioUsu.eliminarUsuario(id).subscribe(
  res =>{this.ngOnInit();},
error => console.log(error) 
);
}



  ngAfterViewInit(): void {

  }

 


}
