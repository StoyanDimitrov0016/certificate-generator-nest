import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsDateString, Length } from 'class-validator';
import {
  type TemplateTheme,
  TEMPLATE_THEMES_LIST,
  TEMPLATE_THEMES_MAP,
} from '../../constants';

export class CertificateDto {
  @ApiProperty({
    description: 'Visual theme for the certificate',
    enum: TEMPLATE_THEMES_LIST,
    enumName: 'TemplateTheme',
    example: TEMPLATE_THEMES_MAP.COLORFUL,
  })
  @IsEnum(TEMPLATE_THEMES_LIST)
  theme: TemplateTheme;

  @ApiProperty({
    description: 'Issuer name',
    example: 'Acme Training Ltd.',
  })
  @IsString()
  @Length(2, 100)
  organizationName: string;

  @ApiProperty({
    description: 'Main heading',
    example: 'Certificate of Completion',
  })
  @IsString()
  @Length(2, 120)
  certificateTitle: string;

  @ApiProperty({
    description: 'Subheading',
    example: 'Frontend Engineering Program',
  })
  @IsString()
  @Length(2, 160)
  certificateSubtitle: string;

  @ApiProperty({
    description: 'Lead-in text',
    example: 'This certifies that',
  })
  @IsString()
  @Length(2, 120)
  presentationText: string;

  @ApiProperty({
    description: 'Recipient full name',
    example: 'Stoyan Dimitrov',
  })
  @IsString()
  @Length(2, 100)
  recipientName: string;

  @ApiProperty({
    description: 'Achievement line',
    example: 'has successfully completed',
  })
  @IsString()
  @Length(2, 160)
  achievementText: string;

  @ApiProperty({
    description: 'Course/program name',
    example: 'NestJS Fundamentals',
  })
  @IsString()
  @Length(2, 160)
  courseTitle: string;

  @ApiProperty({
    description: 'Completion date (ISO 8601)',
    type: String,
    format: 'date',
    example: '2025-08-27',
  })
  @IsDateString()
  completionDate: string;

  @ApiProperty({
    description: 'Signer name',
    example: 'Jane Doe',
  })
  @IsString()
  @Length(2, 100)
  signatureName: string;

  @ApiProperty({
    description: 'Signer title/label',
    example: 'Program Director',
  })
  @IsString()
  @Length(2, 100)
  signatureLabel: string;

  @ApiProperty({
    description: 'Issue date (ISO 8601)',
    type: String,
    format: 'date',
    example: '2025-08-27',
  })
  @IsDateString()
  issueDate: string;
}
