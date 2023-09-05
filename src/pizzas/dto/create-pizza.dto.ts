import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePizzaDto {
  static readonly KEY = 'createPizzaDto';

  @Field()
  readonly name: string;
}
