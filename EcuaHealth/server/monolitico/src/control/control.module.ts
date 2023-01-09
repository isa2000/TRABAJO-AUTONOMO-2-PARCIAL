import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlController } from './control.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Control } from './entities/control.entity';
import { ControlSchema } from './schema/control.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Control.name,
        schema: ControlSchema
      }
    ])
  ],
  controllers: [ControlController],
  providers: [ControlService]
})
export class ControlModule {}
