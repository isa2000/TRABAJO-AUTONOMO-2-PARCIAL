import { IsNotEmpty } from "class-validator";

export class CreateDepartamentoDto {

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    encargado: string;
}
