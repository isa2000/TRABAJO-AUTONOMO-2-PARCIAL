import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento, DepartamentoDocument } from './schema/departamento.schema';
import { Model } from 'mongoose';

@Injectable()
export class DepartamentoService {

  constructor(@InjectModel(Departamento.name) private departamentoModel: Model<DepartamentoDocument>){}

  async create(createDepartamentoDto: CreateDepartamentoDto) {
    const deparetamentoCreate = await this.departamentoModel.create(createDepartamentoDto)
    return deparetamentoCreate;
  }

  async findAll() {
    const departamentos = await this.departamentoModel.find({})
    return departamentos;
  }

  async findById(id: string) {
    const departamento = await this.departamentoModel.findById(id)
    return departamento;
  }

  async update(id: string, updateDepartamentoDto: UpdateDepartamentoDto) {
    const departamentoAct = await this.departamentoModel.findByIdAndUpdate(id, updateDepartamentoDto)
    return departamentoAct;
  }

  async remove(id: string) {
    const departametoDeleted = await this.departamentoModel.findByIdAndDelete(id)
    return departametoDeleted;
  }
}
