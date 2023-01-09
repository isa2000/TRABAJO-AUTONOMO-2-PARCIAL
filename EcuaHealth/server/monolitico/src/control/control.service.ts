import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { Control, ControlDocument } from './schema/control.schema';

@Injectable()
export class ControlService {

  constructor(
    @InjectModel(Control.name) private controlModel: Model<ControlDocument>
  ){}

  async create(createControlDto: CreateControlDto) {
    const controlCreate = await this.controlModel.create(createControlDto);
    return controlCreate;
  }

  async findAll() {
    const controles = await this.controlModel.find({}).populate('idDepartamento')
    return controles;
  }

  async findById(id: string) {
    const control = await this.controlModel.findById(id);
    return control;
  }

  async update(id: string, updateControlDto: UpdateControlDto) {
    const controlUpdate = await this.controlModel.findByIdAndUpdate(id, updateControlDto);
    return controlUpdate;
  }

  async remove(id: string) {
    const controlRemove = await this.controlModel.findByIdAndDelete(id);
    return controlRemove;
  }
}
