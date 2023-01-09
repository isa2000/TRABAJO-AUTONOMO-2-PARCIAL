import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartamentoModule } from './departamento/departamento.module';
import { ControlModule } from './control/control.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/monolitico'),
    DepartamentoModule, 
    ControlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
