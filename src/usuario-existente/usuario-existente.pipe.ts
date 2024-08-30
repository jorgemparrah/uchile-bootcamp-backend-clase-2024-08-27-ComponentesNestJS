import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class UsuarioExistentePipe implements PipeTransform {

  constructor(
    private readonly usuarioService: UsuarioService
  ) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const encontrado = this.usuarioService.findOne(value);
    if (!encontrado) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return value;
  }
}
