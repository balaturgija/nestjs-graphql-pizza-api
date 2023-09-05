import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { RegisterDto } from './dto';
import { AuthService } from './services';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async register(@Args('registerDto') registerDto: RegisterDto) {
    return await this.authService.register(
      registerDto.email,
      registerDto.password,
    );
  }
}
