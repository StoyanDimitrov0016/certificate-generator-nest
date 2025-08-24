import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  rootPath: string = join(__dirname, '..', 'public');
  htmlName: string = 'index.html';

  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.sendFile(this.htmlName, { root: this.rootPath });
  }

  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }

  @Get('ping')
  getPong() {
    return this.appService.getPong();
  }

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }
}
