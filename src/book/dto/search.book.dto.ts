import { IsNotEmpty, IsString } from 'class-validator';

export class SearchBookDTO {
  @IsNotEmpty()
  @IsString()
  readonly s: string;
}
