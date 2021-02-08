import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//@Controller() takes in the URL filter . For eg. /products then only url with /products will be passed through it. In this case there is no filter in it so it handles every route.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
