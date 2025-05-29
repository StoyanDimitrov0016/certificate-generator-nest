import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import { CertificateDto } from './dtos/certificate.dto';

@Injectable()
export class PdfService {
  async generateCertificatePdf(data: CertificateDto): Promise<Buffer> {
    const templatePath = path.join(__dirname, '../../views/certificate.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');

    const templateHandler = handlebars.compile(templateSource);
    const html = templateHandler(data);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfUint8Array = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    const pdfBuffer = Buffer.from(pdfUint8Array);
    return pdfBuffer;
  }
}
