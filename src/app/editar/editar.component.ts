import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicioService } from 'app/Servicio/servicio.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  codigo:FormControl =new FormControl('')
  nombre:FormControl =new FormControl('')
  email:FormControl =new FormControl('')
  password:FormControl =new FormControl('')

  constructor(private servicioUsu:ServicioService,
    private antiveRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //this.codigo=this.antiveRouter.snapshot.params.codigo;
    //console.log(this.codigo);
  }

  UsuarioActulizar(){
    let codigo=this.codigo.value
    let nombre=this.nombre.value
    let email=this.email.value
    let password=this.password.value
    
      this.servicioUsu.modificarUsuario(codigo,nombre,email,password).subscribe(
        res =>{this.router.navigate(['/user']);
        },
      error => console.log(error) 
      );
    }





}
