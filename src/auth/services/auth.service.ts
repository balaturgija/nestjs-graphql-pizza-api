import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthError } from '@supabase/supabase-js';

import { SupabaseService } from './supabase.service';

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async login(email: string, password: string) {
    const { data, error } =
      await this.supabaseService.client.auth.signInWithPassword({
        email,
        password,
      });

    if (data.session) {
      return { token: data.session.access_token };
    }

    if (error) {
      throw new UnauthorizedException();
    }

    return null;
  }

  async register(email: string, password: string) {
    const { data, error } = await this.supabaseService.client.auth.signUp({
      email,
      password,
    });

    if (data.session) {
      return { token: data.session.access_token };
    }

    if (error) {
      throw new AuthError(error.message, error.status);
    }
  }
}
