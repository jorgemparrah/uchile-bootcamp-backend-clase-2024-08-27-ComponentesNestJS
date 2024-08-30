import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class UsuarioService {

  lista: Usuario[];

  constructor() {
    this.lista = [
      new Usuario('8bfa3b20-ab95-47dd-bdff-dcb1e8a8e6ad', "Juan", "Perez", 25),
      new Usuario('a5379f64-8c0e-491f-a54f-598f41b2e5ab', "Maria", "Gomez", 30),
      new Usuario('649434ff-defb-428a-b227-718467f0d533', "Pedro", "Gonzalez", 40)
    ];
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return this.lista;
  }

  findOne(id: string) {
    return this.lista.find(usuario => usuario.id === id);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.findOne(id);
  }

  remove(id: string) {
    const encontrado = this.findOne(id);
    this.lista = this.lista.filter(usuario => usuario.id !== id);
    return encontrado;
  }
}
