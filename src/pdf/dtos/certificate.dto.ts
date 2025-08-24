import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { type TemplateTheme, TEMPLATE_THEMES_LIST } from '../../constants';

export class CertificateDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(TEMPLATE_THEMES_LIST, {
    message: `Theme must be one of the following values: ${TEMPLATE_THEMES_LIST.join(', ')}`,
  })
  theme: TemplateTheme;

  @IsString()
  @IsNotEmpty()
  organizationName: string;

  @IsString()
  @IsNotEmpty()
  certificateTitle: string;

  @IsString()
  @IsNotEmpty()
  certificateSubtitle: string;

  @IsString()
  @IsNotEmpty()
  presentationText: string;

  @IsString()
  @IsNotEmpty()
  recipientName: string;

  @IsString()
  @IsNotEmpty()
  achievementText: string;

  @IsString()
  @IsNotEmpty()
  courseTitle: string;

  @IsString()
  @IsNotEmpty()
  completionDate: string;

  @IsString()
  @IsNotEmpty()
  signatureName: string;

  @IsString()
  @IsNotEmpty()
  signatureLabel: string;

  @IsString()
  @IsNotEmpty()
  issueDate: string;
}
