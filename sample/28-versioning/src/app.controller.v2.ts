import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '2',
})
export class AppControllerV2 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello2();
  }

  @Post()
  getHello2(): string {
    return this.appService.getHello2();
  }
}
