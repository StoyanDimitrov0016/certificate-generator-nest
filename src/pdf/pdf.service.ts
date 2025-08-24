import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  BadRequestException,
} from '@nestjs/common';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import handlebars, { TemplateDelegate } from 'handlebars';
import puppeteer, { Browser, Page } from 'puppeteer';
import { CertificateDto } from './dtos/certificate.dto';
import { TEMPLATE_THEMES_LIST, type TemplateTheme } from 'src/constants';

@Injectable()
export class PdfService implements OnModuleInit, OnModuleDestroy {
  private browser: Browser;
  private templates = new Map<
    TemplateTheme,
    TemplateDelegate<CertificateDto>
  >();

  async onModuleInit() {
    this.browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
    });

    await Promise.all(
      TEMPLATE_THEMES_LIST.map(async (theme) => {
        const interpolated = `../../views/certificate-${theme}.hbs`;
        const filePath = path.join(__dirname, interpolated);

        const template = await fsPromises.readFile(filePath, 'utf-8');
        this.templates.set(theme, handlebars.compile<CertificateDto>(template));
      }),
    );
  }

  async onModuleDestroy() {
    if (this.browser) await this.browser.close();
  }

  async createCertificate(certificateDto: CertificateDto): Promise<Buffer> {
    const page: Page = await this.browser.newPage();

    const htmlHandler = this.templates.get(certificateDto.theme);
    if (!htmlHandler) {
      throw new BadRequestException('Invalid certificate theme.');
    }

    const html = htmlHandler(certificateDto);
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      preferCSSPageSize: true,
    });

    await page.close();
    return Buffer.from(pdfBuffer);
  }
}
