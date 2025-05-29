import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { Response } from 'express';
import { CertificateDto } from './dtos/certificate.dto';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('')
  async create(@Body() data: CertificateDto, @Res() res: Response) {
    const pdfBuffer = await this.pdfService.generateCertificatePdf(data);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="certificate.pdf"',
    });

    res.send(pdfBuffer);
  }
}
