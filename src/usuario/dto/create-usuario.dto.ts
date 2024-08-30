import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, Max } from "class-validator";

export class CreateUsuarioDto {

  @ApiProperty({ type: String, description: "Nombre del usuario" })
  @IsString({ message: "El nombre deben ser solo letras" })
  nombre: string;

  @ApiProperty({ type: String, description: "Nombre del usuario" })
  @IsString({ message: "El nombre debe ser un string" })
  apellido: string;

  @ApiProperty({ type: Number, description: "Edad del usuario", minimum: 0, maximum: 100 })
  @IsNumber({ }, { message: "La edad debe ser un número" })
  @IsPositive({ message: "La edad debe ser un número positivo" })
  @IsInt({ message: "La edad debe ser un número entero" })
  @Max(100, { message: "La edad debe ser menor a 100" })
  edad: number;

}
