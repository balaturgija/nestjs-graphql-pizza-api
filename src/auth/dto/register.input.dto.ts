import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInputDto {
  static readonly KEY = 'registerDto';

  @Field()
  email: string;

  @Field()
  password: string;
}
