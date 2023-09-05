import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class PizzaArgs {
  @Field((type) => String)
  @IsString()
  name: string;
}
