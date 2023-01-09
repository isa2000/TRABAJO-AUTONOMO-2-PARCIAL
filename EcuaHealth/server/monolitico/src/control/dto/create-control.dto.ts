import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";
import { Departamento } from "src/departamento/schema/departamento.schema";

export class CreateControlDto {
    @IsNotEmpty()
    fecha: string;

    @IsNotEmpty()
    persona: string;

    @IsNotEmpty()
    @IsNumber()
    tiempoDepreciacion: number;

    @IsNotEmpty()
    @IsMongoId()
    idDepartamento : Departamento

    @IsNotEmpty()
    @IsMongoId()
    idActivo : string
}