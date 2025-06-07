import { Controller, Post, Body, Header } from '@nestjs/common';
import { StreamableFile } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { CertificateDto } from './dtos/certificate.dto';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('generate')
  @Header('Content-Type', 'application/pdf')
  async create(@Body() data: CertificateDto): Promise<StreamableFile> {
    const pdfBuffer = await this.pdfService.generateCertificatePdf(data);

    const name = data.recipientName
      .slice(0, 30)
      .toLowerCase()
      .replace(/\s+/g, '_');
    const filename = `certificate_${name}_${data.theme}.pdf`;

    return new StreamableFile(pdfBuffer, {
      type: 'application/pdf',
      disposition: `attachment; filename="${filename}"`,
    });
  }
}
