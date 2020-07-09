import { Module } from '@nestjs/common';
import { AppControllerV1 } from './app.controller.v1';
import { AppControllerV2 } from './app.controller.v2';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppControllerV1, AppControllerV2],
  providers: [AppService],
})
export class AppModule {}
