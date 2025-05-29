import { Controller, Get, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { Response } from 'express';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('test')
  async getPdf(@Res() res: Response) {
    const pdfBuffer = await this.pdfService.generateCertificatePdf({
      recipientName: 'Charlotte Smith',
      eventName: 'Local Chess Tournament 2025',
      issueDate: 'May 29, 2025',
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="certificate.pdf"',
    });

    res.send(pdfBuffer);
  }
}
