import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginDto {
  static readonly KEY = 'loginDto';

  @Field()
  email: string;

  @Field()
  password: string;
}
