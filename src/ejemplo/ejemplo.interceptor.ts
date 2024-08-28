import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class EjemploInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Interceptor - ANTES DE LLEGAR AL CONTROLADOR - INICIO');
    console.log('Interceptor - ANTES DE LLEGAR AL CONTROLADOR - FIN');
    // const nombre = context.switchToHttp().getRequest().body.nombre;
    // if (!nombre) {
    //   context.switchToHttp().getRequest().body.nombre = "Prueba"
    // }
    // context.switchToHttp().getResponse().status(200);
    return next.handle()
      .pipe(
        map((val) => {
          console.log('Interceptor - DESPUES DEL CONTROLADOR - OK...');
          console.log(val);
          return val;
        }),
        catchError((err) => {
          console.log('Interceptor - DESPUES DEL CONTROLADOR - ERROR...');
          console.log(err.message);
          throw err;
        }),
      );

  }
}




