import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '2'
})
export class AppControllerV2 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello2(): string {
    return this.appService.getHello2();
  }
}
