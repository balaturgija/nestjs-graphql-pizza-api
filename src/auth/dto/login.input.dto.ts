import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInputDto {
  static readonly KEY = 'loginDto';

  @Field()
  email: string;

  @Field()
  password: string;
}
