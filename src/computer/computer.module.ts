import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  controllers: [ComputerController],
  imports: [PowerModule],
})
export class ComputerModule {}
