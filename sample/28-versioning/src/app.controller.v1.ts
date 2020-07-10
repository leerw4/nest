import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '1'
})
export class AppControllerV1 {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHello2(): string {
    return this.appService.getHello();
  }
}
