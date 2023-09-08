import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthResolver } from './auth.resolver';
import { AuthService, SupabaseService } from './services';
import { SupabaseStrategy } from './strategies';

@Module({
  imports: [ConfigModule],
  providers: [SupabaseStrategy, SupabaseService, AuthService, AuthResolver],
  exports: [AuthService, SupabaseStrategy],
})
export class AuthModule {}
