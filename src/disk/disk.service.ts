import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {} // we use power service and its methods in our diskservice so we need them
  getData() {
    console.log('Drawing 3 watts from Power Supply');
    this.powerService.supplyPower(3);
    return 'data';
  }
}
