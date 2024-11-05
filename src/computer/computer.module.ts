import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { PowerModule } from 'src/power/power.module';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  controllers: [ComputerController],
  imports: [PowerModule, DiskModule, CpuModule],
})
export class ComputerModule {}
