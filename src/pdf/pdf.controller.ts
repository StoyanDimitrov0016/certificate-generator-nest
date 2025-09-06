import { Controller, Post, Body, Header, HttpCode } from '@nestjs/common';
import { StreamableFile } from '@nestjs/common';
import { ApiOkResponse, ApiProduces, ApiTags } from '@nestjs/swagger';
import { PdfService } from './pdf.service';
import { CertificateDto } from './dtos/certificate.dto';
import { TemplateTheme } from 'src/constants';

@ApiTags('PDF')
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('generate')
  @HttpCode(200)
  @Header('Content-Type', 'application/pdf')
  @ApiProduces('application/pdf')
  @ApiOkResponse({
    description: 'PDF file',
    content: {
      'application/pdf': { schema: { type: 'string', format: 'binary' } },
    },
  })
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
    const name = recipientName
      .slice(0, 30)
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');
    return `certificate_${name}_${theme}.pdf`;
  }
}
