import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { RegisterDto } from './dto';
import { AuthService } from './services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(
      registerDto.email,
      registerDto.password,
    );
  }
}
