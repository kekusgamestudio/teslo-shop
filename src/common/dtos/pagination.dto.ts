import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // Conversión implicita a número
  limit?: number;

  @IsOptional()
  @Type(() => Number)
  page?: number;
}
