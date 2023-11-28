import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
