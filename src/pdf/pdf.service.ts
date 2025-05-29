import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import handlebars from 'handlebars';
import * as path from 'path';

import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generateCertificatePdf(data: any): Promise<Buffer> {
    const templatePath = path.join(__dirname, '../../views/certificate.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf-8');

    const template = handlebars.compile(templateSource);
    const html = template(data);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfUint8Array = await page.pdf({ format: 'A4' });
    const pdfBuffer = Buffer.from(pdfUint8Array);

    await browser.close();
    return pdfBuffer;
  }
}
