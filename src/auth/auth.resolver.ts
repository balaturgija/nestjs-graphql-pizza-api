import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LoginInputDto, RegisterInputDto } from './dto';
import { AuthResponse } from './models';
import { AuthService } from './services';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async register(@Args(RegisterInputDto.KEY) registerDto: RegisterInputDto) {
    return await this.authService.register(
      registerDto.email,
      registerDto.password,
    );
  }

  @Mutation(() => AuthResponse)
  async login(@Args(LoginInputDto.KEY) loginDto: LoginInputDto) {
    return await this.authService.login(loginDto.email, loginDto.password);
  }
}
