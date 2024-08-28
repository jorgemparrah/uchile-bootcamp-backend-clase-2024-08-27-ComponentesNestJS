import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Ejemplo2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Middleware EjemploMiddleware2');
    req.ejemplo2 = 'Lleno en el Middleware - EjemploMiddleware2';
    next();
  }
}
