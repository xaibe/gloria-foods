import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
 async root() {
 
      return await this.appService.testfile();
    
  }

}
