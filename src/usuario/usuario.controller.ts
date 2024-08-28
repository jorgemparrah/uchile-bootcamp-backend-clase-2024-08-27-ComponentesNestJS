import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, Res, UseInterceptors, HttpException, BadRequestException, UseFilters, UnauthorizedException, ImATeapotException, Headers, ParseArrayPipe, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { EjemploGuard } from 'src/ejemplo/ejemplo.guard';
import { EjemploInterceptor } from 'src/ejemplo/ejemplo.interceptor';
import { EjemploFilter } from 'src/ejemplo/ejemplo.filter';

@UseFilters(EjemploFilter)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UseGuards(EjemploGuard)
  @UseInterceptors(EjemploInterceptor)

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto, @Query("identificador", new ParseArrayPipe({ items: Number, separator: ',' })) identificador: number[]) {
    console.log('Identificador', identificador);
    console.log('Body', createUsuarioDto);
    // console.log('Req - Ejemplo: ', request.ejemplo);
    // console.log('Req - Ejemplo 2: ', request.ejemplo2);
    // console.log('Res - Ejemplo: ', response.ejemplo);
    // console.log('Res - Ejemplo 2: ', response.ejemplo2);
    // response.status(201).send('Usuario creado');
    throw new BadRequestException('Error de ejemplo');
    // return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
    throw new Error('Method not implemented.');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
