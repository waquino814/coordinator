// create-project.dto.ts
import { IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsUrl()
  repoUrl: string;

  @IsString()
  description: string;

  @IsUrl()
  deployUrl: string;
}
