import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  public client: SupabaseClient;

  constructor(private readonly configService: ConfigService) {
    this.client = createClient(
      configService.get('SUPABASE_PROJECT_URL'),
      configService.get('SUPABASE_API_KEY'),
      { auth: { persistSession: false, autoRefreshToken: true } },
    );
  }
}
