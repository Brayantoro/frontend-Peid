import { Component, OnInit } from '@angular/core';
import { ejeEstrategico, objetivoEstrategico, proyecto } from '../models/model.interface';

import { ServicioService } from '../../Servicio/servicio.service';

declare var $:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',

})
export class FormularioComponent implements OnInit {

  constructor(private servicio: ServicioService) { }

  public selectdEjeEstrategico: ejeEstrategico = { id: 0, nombre: '' };
  public ejeEstrategicos: ejeEstrategico[];
  public objetivoEstrategicos: objetivoEstrategico[];

  public selectObjetivoEstrategico: objetivoEstrategico = { id: 0, nombre: '', ejeEstrategicoId: 0 };
  public proyectos: proyecto[];



  ngOnInit(): void {
    this.ejeEstrategicos = this.servicio.getEjeEstrategico();
    console.log(this.servicio.getProyecto());
    console.log(this.servicio.getObjeticoEStrategico());
  }

  onSelect(id: number): void {
    this.objetivoEstrategicos = this.servicio.getObjeticoEStrategico().filter(item => item.id = id)
  }

onSelect2(id:number){
  
    this.proyectos = this.servicio.getProyecto().filter(item => item.id = id)


}






}
