import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { EjemploMiddleware } from './ejemplo/ejemplo.middleware';
import { Ejemplo2Middleware } from './ejemplo/ejemplo2.middleware';

@Module({
  imports: [UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EjemploMiddleware, Ejemplo2Middleware) // MIDDLEWARE A APLICAR
      .forRoutes('usuario');                        // RUTAS A LAS QUE APLICA
    
  }
}
