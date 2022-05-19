export interface ejeEstrategico{
    id:number;
    nombre:string;
}

export interface objetivoEstrategico{
    id:number;
    nombre:string;
    ejeEstrategicoId:number;
}

export interface proyecto{
    id:number;
    nombre:string;
    objetivoEstrategicoId:number;
}

