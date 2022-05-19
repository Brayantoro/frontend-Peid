import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { ejeEstrategico, objetivoEstrategico, proyecto } from '../models/model.interface';






@Injectable()
export class ServicioService {


  
 private ejeEstrategicos:ejeEstrategico[]=[
{
  id:1,
  nombre:'1. EJE ESTRATÉGICO INNOVACIÓN',
}
];

private objetivoEstrategicos:objetivoEstrategico[]=[
  {
    id:1,
    nombre:'1.1 Ampliar la oferta académica, a través de la diversificación  e innovación del portafolio, para que responda a las realidades  ambientales, sociales, culturales, empresariales y tecnológicas  del país y de la región',
    ejeEstrategicoId:1,
  },
  {
    id:2,
    nombre:'1.2 Consolidar entornos diferenciales de enseñanza que permitan asegurar la adquisición de las competencias requeridas',
    ejeEstrategicoId:1,
  },
  {
    id:3,
    nombre:'1.3 Consolidar un sistema de aseguramiento de la calidad académica y administrativa, mediado por procesos de innovación, que permita alcanzar altos estándares nacionales e internacionales',
    ejeEstrategicoId:1,
  },
  {
    id:4,
    nombre:'1.4 Fortalecer la relación Universidad - Empresa - '
    +'Sociedad, a través de la creación, gestión y transferencia' 
    +'del conocimiento científico, tecnológico, artístico y '
    +'humanístico, para convertirse en pilar del desarrollo'
    +' económico, social y cultural del país',
    ejeEstrategicoId:1,
  },
  {
    id:5,
    nombre:'1.5 Ser reconocidos por la trasformación digital de los procesos académicos y administrativos en el contexto de las instituciones de la educación supe',
    ejeEstrategicoId:1,
  },

  {
    id:6,
    nombre:'1.6 Ser referente nacional e internacional en innovación social',
    ejeEstrategicoId:1,
  }
];

private proyectos:proyecto[]=[
{
  id:1,
  nombre:'1.1.1 20 programas académicos nuevos en los niveles de',
  objetivoEstrategicoId:1,

},
{
  id:2,
  nombre:'1.1.2 140 programas de formación ejecutiva y continuada, dirigidos a empresas y profesionales',
  objetivoEstrategicoId:1,

},

{
  id:3,
  nombre:'1.2.1 14 ambientes especializados de aprendizaje, vinculando nuevas tecnologías que faciliten el acceso a la información y el conocimiento',
  objetivoEstrategicoId:2,

},
{
  id:4,
  nombre:'1.2.2 El 100% de los cursos de los programas académicos presenciales tendrán actividades de apoyo en línea',
  objetivoEstrategicoId:2,

},

];
  constructor(private http:HttpClient) { }

  private  url:string="https://software3peid.azurewebsites.net";



getEjeEstrategico():ejeEstrategico[]{
  return this.ejeEstrategicos;
}

getObjeticoEStrategico():objetivoEstrategico[]{
  return this.objetivoEstrategicos;
}

getProyecto():proyecto[]{
  return this.proyectos;
}




}
