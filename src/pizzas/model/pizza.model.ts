import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pizza {
  @Field()
  id: string;

  @Field()
  name: string;
}
