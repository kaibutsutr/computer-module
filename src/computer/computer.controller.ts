import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}
  @Get()
  run() {
    const computed = this.cpuService.compute(5, 3);
    const data = this.diskService.getData();
    return [computed, data];
  }
}
