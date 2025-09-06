# 📄 Certificate Generator (NestJS)

This is a web-based PDF Certificate Generator built with **NestJS**, **Handlebars**, and **Puppeteer**. It allows users to generate styled PDF certificates via a configurable web form.

## 🚀 Features

- Generate custom PDF certificates
- Fully styled HTML certificate template using Handlebars and CSS
- Dynamic text fields (recipient, course, dates, etc.)
- Static homepage with live form
- Puppeteer-powered PDF export
- Built-in field validation via class-validator
- Support for three certificate themes: **colorful**, **monochrome**, and **dark**
- Dynamic download filename suggestion based on recipient name and selected theme
- Swagger/OpenAPI docs available at [`/docs`](http://localhost:3000/docs)

## 🧰 Tech Stack

- **Backend**: [NestJS](https://nestjs.com/)
- **PDF Rendering**: [Handlebars](https://handlebarsjs.com/) + [Puppeteer](https://pptr.dev/)
- **Styling**: CSS (custom + reset)
- **Validation**: class-validator + ValidationPipe
- **Frontend Form**: Static HTML served via Nest
- **Swagger/OpenAPI**: [NestJS OpenAPI (Swagger)](https://docs.nestjs.com/openapi/introduction)

### 📦 Install dependencies

```bash
npm install
```

## 🖥️ Run the development server

```bash
npm run start:dev
```

## 🧾 Generate a certificate

1. Open the homepage form (Visit: http://localhost:3000)
2. Fill in the details, including selecting one of the three themes
3. Submit and wait to download a styled PDF (filename will be auto-generated as `certificate_<recipient>_<theme>.pdf`)

## 📁 Output

Certificates are returned as downloadable PDFs.

## 🖼️ Certificate Examples

## 🖼️ Certificate Examples

### Colorful

[<img src="./certificate-examples/colorful.png" width="400">](./certificate-examples/certificate_alexander_jonathan_colorful.pdf)

### Dark

[<img src="./certificate-examples/dark.png" width="400">](./certificate-examples/certificate_alexander_jonathan_dark.pdf)

### Monochrome

[<img src="./certificate-examples/monochrome.png" width="400">](./certificate-examples/certificate_alexander_jonathan_monochrome.pdf)

## 👨‍💻 Author

Built by **Stoyan Dimitrov**
