import { IsNotEmpty, IsString } from 'class-validator';

export class CertificateDto {
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
