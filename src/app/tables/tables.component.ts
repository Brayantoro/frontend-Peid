import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Id', 'EJE ESTRATÉGICO ', 'Objetivo estrategico', 'Proyecto', 'Meta','Peso%','Actividad','Evidencia del cumplimiento','responsables de la actividad','presupuesto','Fecha inicio','Fecha Fin'],
          dataRows: [
              ['1', 'eje estrategico innovacion', '1.2 Consolidar entornos diferenciales de enseñanza que'+ 
                                                   'permitan asegurar la adquisición de las competencias requeridas',
                                                   '1.2.1 14 ambientes especializados de aprendizaje, vinculando'+
                                                    'nuevas tecnologías que faciliten el acceso a la información y el' +
                                                    'conocimiento', 'Actulizaciones bibiblioteca y campus','15%','cotizar equipos de computo para la biblioteca','cotizacion','jefe ingeniero de soporte','$ 4.000.000','6/30/2022','7/15/2022'],


          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }

}
