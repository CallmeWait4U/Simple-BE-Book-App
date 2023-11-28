import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteBookDTO {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
}
