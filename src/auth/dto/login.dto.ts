import { Field } from '@nestjs/graphql';

export class LoginDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
