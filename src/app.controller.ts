import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/time')
  async getTime(): Promise<string> {
    return  this.appService.getTime();
  }
}
