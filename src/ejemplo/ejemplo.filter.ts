import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, ImATeapotException } from '@nestjs/common';
import { Response } from 'express';

@Catch(ImATeapotException)
export class EjemploFilter<ImATeapotException> implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('Filter EjemploFilter');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    console.log('Exception', exception.getResponse());
    response.status(400).json({
      mensajes: exception.getResponse()["message"],
      error: "Error en la petición",
    })
  }

}
