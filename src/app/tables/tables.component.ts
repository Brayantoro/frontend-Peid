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
            headerRow: ['Id', 'EJE ESTRATÉGICO ', 'Objetivo estrategico', 'Proyecto', 'Meta', 'Peso%', 'Actividad', 'Evidencia del cumplimiento', 'responsables de la actividad', 'presupuesto', 'Fecha inicio', 'Fecha Fin'],
            dataRows: [
                ['1', 'eje estrategico innovacion', '1.6 Ser referente nacional e internacional en innovación social',
                    '1.6.1 Dos proyectos de innovación social con organismos de   cooperación internacional','Actulizaciones bibiblioteca y campus', '15%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', 'jefe ingeniero de redes', '$ 4.000.000', '6/30/2022', '7/15/2022'],

                ['1', 'eje estrategico innovacion', '1.2 Consolidar entornos diferenciales de enseñanza que' +
                    'permitan asegurar la adquisición de las competencias requeridas',
                    '1.2.2 El 100% de los cursos de los programas académicos '+
                   ' presenciales tendrán actividades de apoyo en línea', 'Compra de equipos  para la sala','20%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', 'jefe ingeniero de soporte', '$ 7.000.000', '6/30/2022', '7/15/2022'],

                ['1', 'eje estrategico innovacion', '1.6 Ser referente nacional e internacional en innovación social' +
                    'permitan asegurar la adquisición de las competencias requeridas',
                    '1.2.1 14 ambientes especializados de aprendizaje, vinculando' +
                    'nuevas tecnologías que faciliten el acceso a la información y el' +
                    'conocimiento', 'nuevas modalidades de clase virtual contenido en internet', '10%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', ' ingeniero de sistemas y redess', '$ 6.000.000', '6/6/2022', '8/20/2022'],

                ['1', 'eje estrategico innovacion', '1.2 Consolidar entornos diferenciales de enseñanza que' +
                    'permitan asegurar la adquisición de las competencias requeridas',
                    '1.2.3 El 20% del total de los créditos por programa académico'+
                    'presencial que corresponde al núcleo de formación transversal,'+ 
                    'estarán en la plataforma virtua', 'Actulizaciones bibiblioteca y campus', '5%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', ' ingeniero de soporte', '$ 3.000.000', '6/6/2022', '9/15/2022'],

                ['1', 'eje estrategico innovacion', '1.2 Consolidar entornos diferenciales de enseñanza que' +
                    'permitan asegurar la adquisición de las competencias requeridas',
                    '1.2.1 14 ambientes especializados de aprendizaje, vinculando' +
                    'nuevas tecnologías que faciliten el acceso a la información y el' +
                    'conocimiento', 'Actulizaciones bibiblioteca y campus', '25%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', 'jefe Redes ingeniero de soporte', '$ 1.000.000', '7/8/2022', '8/15/2022'],
                ['1', 'eje estrategico innovacion', '1.2 Consolidar entornos diferenciales de enseñanza que' +
                    'permitan asegurar la adquisición de las competencias requeridas',
                    '1.2.1 14 ambientes especializados de aprendizaje, vinculando' +
                    'nuevas tecnologías que faciliten el acceso a la información y el' +
                    'conocimiento', 'Actulizaciones bibiblioteca y campus', '30%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', 'jefe DIS -ingeniero de soporte', '$ 5.000.000', '9/24/2022', '10/18/2022'],
                ['1', 'eje estrategico innovacion', '1.2 Consolidar entornos diferenciales de enseñanza que' +
                    'permitan asegurar la adquisición de las competencias requeridas',
                    '1.2.1 14 ambientes especializados de aprendizaje, vinculando' +
                    'nuevas tecnologías que faciliten el acceso a la información y el' +
                    'conocimiento', 'Actulizaciones bibiblioteca y campus', '40%', 'cotizar equipos de computo para la biblioteca', 'cotizacion', 'jefe ingeniero de soporte', '$ 7.000.000', '6/11/2022', '11/1/2022'],
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    }

}
