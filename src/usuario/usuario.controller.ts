import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, Res, UseInterceptors, HttpException, BadRequestException, UseFilters, UnauthorizedException, ImATeapotException, Headers, ParseArrayPipe, Query, ParseIntPipe, DefaultValuePipe, ParseEnumPipe, ParseUUIDPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { EjemploGuard } from 'src/ejemplo/ejemplo.guard';
import { EjemploInterceptor } from 'src/ejemplo/ejemplo.interceptor';
import { EjemploFilter } from 'src/ejemplo/ejemplo.filter';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Tipo } from './tipo.enum';
import { uuid } from 'uuidv4';
import { Contenedor } from './contenedor';
import { EjemploPipe } from 'src/ejemplo/ejemplo.pipe';
import { UsuarioExistentePipe } from 'src/usuario-existente/usuario-existente.pipe';

@UseFilters(EjemploFilter)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiBody({ type: CreateUsuarioDto })
  @UseGuards(EjemploGuard)
  @UseInterceptors(EjemploInterceptor)
  @UsePipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    // forbidNonWhitelisted: true
  }))
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    console.log('######################################################');
    console.log('######################################################');
    console.log('Body')
    console.log(createUsuarioDto);

    // const uuid_str = uuid();
    // console.log('UUID', uuid_str);

    // console.log('Req - Ejemplo: ', request.ejemplo);
    // console.log('Req - Ejemplo 2: ', request.ejemplo2);
    // console.log('Res - Ejemplo: ', response.ejemplo);
    // console.log('Res - Ejemplo 2: ', response.ejemplo2);
    // response.status(201).send('Usuario creado');
    // throw new BadRequestException('Error de ejemplo');
    console.log('======================================================');
    console.log('======================================================');
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get("all")
  findAll() {
    const contenedor : Contenedor<string> = new Contenedor();
    contenedor.insertarElemento("Elemento 1");
    contenedor.insertarElemento("Elemento 2");
    console.log(contenedor.obtenerElemento(0))
    console.log(contenedor.obtenerElemento(2))
    console.log(contenedor.obtenerElemento(3))

    return this.usuarioService.findAll();
  }

  @ApiQuery({ name: 'id', type: String, required: false, example: '8' })
  @Get()
  findOne(@Query('id', new ParseUUIDPipe({ errorHttpStatusCode: 400 }), UsuarioExistentePipe) id: string) {
    console.log("ID", id);
    return this.usuarioService.findOne(id);
  }

  /*
  @ApiQuery({ name: 'id', type: String, required: false, example: '8' })
  @Get()
  findOne(@Query('id', new DefaultValuePipe(uuid()), new ParseIntPipe({ errorHttpStatusCode: 400 })) id: string) {
    console.log("ID", id);
    return this.usuarioService.findOne(id);
  }
  */

  @ApiQuery({ name: 'tipo', type: String, required: false, example: 'ADMIN' })
  @Get("tipo")
  findByType(@Query('tipo', new ParseEnumPipe(Tipo, { errorHttpStatusCode: 400 })) tipo: Tipo) {
    console.log("TIPO", tipo);
    // return this.usuarioService.findOne(+id);
    return null;
  }

  @Get("texto")
  findByText(@Query('texto', new EjemploPipe()) texto: string) {
    console.log("texto", texto);
    // return this.usuarioService.findOne(+id);
    return null;
  }

  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
    throw new Error('Method not implemented.');
  }


  @ApiQuery({ name: 'identificador', type: String })
  @Delete(':id')
  remove(@Param("identificador", new ParseArrayPipe({ items: Number, separator: ',', errorHttpStatusCode: 501,  })) identificador: number[]) {
    console.log('Identificador', identificador);
    // return this.usuarioService.remove(+id);
    return identificador;
  }
}
