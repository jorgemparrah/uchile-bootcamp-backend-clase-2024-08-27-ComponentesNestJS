import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, ImATeapotException } from '@nestjs/common';
import { Response } from 'express';

@Catch(ImATeapotException)
export class EjemploFilter<ImATeapotException> implements ExceptionFilter {

  catch(exception: ImATeapotException, host: ArgumentsHost) {
    console.log('Filter EjemploFilter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(400).json({
      mensaje: 'Error en la petición',
      error: "Error en la petición",
    })
  }

}
