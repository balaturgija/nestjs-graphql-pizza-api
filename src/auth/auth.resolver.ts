import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LoginDto, RegisterDto } from './dto';
import { AuthResponse } from './models';
import { AuthService } from './services';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async register(@Args(RegisterDto.KEY) registerDto: RegisterDto) {
    return await this.authService.register(
      registerDto.email,
      registerDto.password,
    );
  }

  @Mutation(() => AuthResponse)
  async login(@Args(LoginDto.KEY) loginDto: LoginDto) {
    return await this.authService.login(loginDto.email, loginDto.password);
  }
}
