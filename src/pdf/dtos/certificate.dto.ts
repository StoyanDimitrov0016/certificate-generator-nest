import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TemplateTheme, TEMPLATE_THEMES } from '../../constants';

export class CertificateDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(TemplateTheme, {
    message: `theme must be one of the following values: ${TEMPLATE_THEMES.join(', ')}`,
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
