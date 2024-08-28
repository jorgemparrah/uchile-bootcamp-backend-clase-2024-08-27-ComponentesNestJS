import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EjemploGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const http = context.switchToHttp();
    const request = http.getRequest();
    console.log('Guard EjemploGuard');
    console.log('Req - Ejemplo: ', request.body.nombre);
    if (request.body.nombre === 'JORGE') {
        return true;
    }
    return false;
  }

}
