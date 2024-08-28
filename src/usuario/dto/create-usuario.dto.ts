import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

  @ApiProperty({ default: "Prueba" })
  nombre: string;

}
