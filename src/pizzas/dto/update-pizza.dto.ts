import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreatePizzaDto } from './create-pizza.dto';

@InputType()
export class FilterPizza {
  @Field({ nullable: true })
  readonly id: string;

  @Field({ nullable: true })
  name: string;
}

@InputType()
export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  static readonly KEY = 'updatePizzaDto';

  @Field()
  readonly filter?: FilterPizza;
}
