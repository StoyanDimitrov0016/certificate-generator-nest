import { Controller, Post, Body, Header } from '@nestjs/common';
import { StreamableFile } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { CertificateDto } from './dtos/certificate.dto';
import { TemplateTheme } from 'src/constants';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('generate')
  @Header('Content-Type', 'application/pdf')
  async create(
    @Body() certificateDto: CertificateDto,
  ): Promise<StreamableFile> {
    const pdfBuffer = await this.pdfService.createCertificate(certificateDto);

    const { recipientName, theme } = certificateDto;
    const filename = this.getFilename(recipientName, theme);

    return new StreamableFile(pdfBuffer, {
      type: 'application/pdf',
      disposition: `attachment; filename="${filename}"`,
    });
  }

  private getFilename(recipientName: string, theme: TemplateTheme) {
    const name = recipientName.slice(0, 30).toLowerCase().replace(/\s+/g, '_');
    return `certificate_${name}_${theme}.pdf`;
  }
}
