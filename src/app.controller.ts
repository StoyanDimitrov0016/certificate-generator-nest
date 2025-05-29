import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('certificate')
  getCertificate() {
    return {
      recipientName: 'Charlotte Smith',
      eventName: 'Local Chess Tournament 2025',
      issueDate: 'May 29, 2025',
    };
  }
}
