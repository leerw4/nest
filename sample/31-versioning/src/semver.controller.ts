import { Controller, Get, Version } from '@nestjs/common';

@Controller({
  version: '1.x',
})
export class SemverController {
  @Version('1.4.x')
  @Get('/semver')
  semver_1_4_x() {
    return 'Semver 1.4.x!';
  }

  @Version('1.5.x')
  @Get('/semver')
  semver_1_5_x() {
    return 'Semver 1.5.x!';
  }

  // Any default handlers should be at the bottom of the class
  @Get('/semver')
  semver() {
    return 'Semver 1.x!';
  }
}
