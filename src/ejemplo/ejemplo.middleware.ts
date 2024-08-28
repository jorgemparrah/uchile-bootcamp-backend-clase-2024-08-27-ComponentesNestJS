import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class EjemploMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Middleware EjemploMiddleware');
    req.body.nombre = req.body.nombre.toUpperCase();
    req.ejemplo = 'Lleno en el Middleware - EjemploMiddleware';
    next();
  }
}
