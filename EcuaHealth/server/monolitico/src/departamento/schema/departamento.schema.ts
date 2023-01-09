import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepartamentoDocument = Departamento & Document;

@Schema()
export class Departamento { 
  @Prop({unique:true}) //EL DEPARTAMENTO SERÁ UNICO
  nombre: string;

  @Prop()
  encargado: string;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);