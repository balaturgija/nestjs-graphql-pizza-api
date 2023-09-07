import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { NestFactory } from '@nestjs/core';
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const httpsOptions: HttpsOptions = {
    key: readFileSync(join(homedir(), 'certs', 'server.key'), 'utf8'),
    cert: readFileSync(join(homedir(), 'certs', 'server.crt'), 'utf8'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(3000);
}
bootstrap();
