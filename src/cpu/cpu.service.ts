import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service'; // import power service since cpu is dependant on it

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {
    // everytime a cpu service is created, it uses the power service
  }
  compute(a: number, b: number) {
    console.log('Drawing 1 watt from Power supply');
    this.powerService.supplyPower(1); // we use this operator here because we are using this instance of the object

    return a * b;
  }
}
