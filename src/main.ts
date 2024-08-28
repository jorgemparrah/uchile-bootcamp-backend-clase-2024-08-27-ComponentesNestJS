import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsuarioModule } from './usuario/usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Usuario - APP')
    .setDescription('Esta api describe el módulo usuario')
    .setVersion('1.0.0')
    .addTag('usuario-api')
    .build();

  const documentApp = SwaggerModule.createDocument(app, config, {
    include: [ AppModule, UsuarioModule ],
  });

  SwaggerModule.setup('docs', app, documentApp);

  await app.listen(3000);
}
bootstrap();
