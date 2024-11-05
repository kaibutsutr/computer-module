import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // dependency auto created for DI
  exports: [PowerService], // we can export this service to other modules with this code
})
export class PowerModule {}
