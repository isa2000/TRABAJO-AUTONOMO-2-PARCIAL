import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber } from 'class-validator';
import mongoose, { Document } from 'mongoose';
import { Departamento } from 'src/departamento/schema/departamento.schema';

export type ControlDocument = Control & Document;

@Schema()
export class Control {
  @Prop()
  fecha: string;

  @Prop()
  persona: string;
  
  @Prop()
  tiempoDepreciacion: number;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Departamento'})
  idDepartamento: Departamento;

  @Prop()
  idActivo: string;


}

export const ControlSchema = SchemaFactory.createForClass(Control);