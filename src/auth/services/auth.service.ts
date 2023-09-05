import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { SupabaseService } from './supabase.service';

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async login(email: string, password: string) {
    await this.supabaseService.getClient();

    const { data, error } =
      await this.supabaseService.client.auth.signInWithPassword({
        email,
        password,
      });

    if (data.session) {
      return data.session;
    }

    if (error) {
      throw new UnauthorizedException();
    }

    return null;
  }

  async register(email: string, password: string) {
    await this.supabaseService.getClient();

    const { data, error } = await this.supabaseService.client.auth.signUp({
      email,
      password,
    });

    if (data.session) {
      return data.session.access_token;
    }

    if (error) {
      return error;
      // throw new HttpException({ message: 'Registration fail' }, 400);
    }
  }
}
