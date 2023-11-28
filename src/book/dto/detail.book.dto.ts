import { IsNotEmpty, IsString } from 'class-validator';

export class DetailBookDTO {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
}
