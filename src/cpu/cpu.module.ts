import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule], // import powermodule here so our services are all exported
  exports: [CpuService], // these are private by default so we need exports to carry them between modules
})
export class CpuModule {}
