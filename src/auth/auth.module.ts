import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { SupabaseGuard } from './guards';
import { AuthService, SupabaseService } from './services';
import { SupabaseStrategy } from './strategies';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [
    SupabaseStrategy,
    SupabaseGuard,
    SupabaseService,
    AuthService,
    AuthResolver,
  ],
  exports: [SupabaseStrategy, SupabaseGuard],
})
export class AuthModule {}
