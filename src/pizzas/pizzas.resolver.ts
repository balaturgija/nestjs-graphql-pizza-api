import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UpdatePizzaDto } from './dto';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { Pizza } from './model';
import { PizzasService } from './pizzas.service';

@Resolver()
export class PizzasResolver {
  constructor(private readonly pizzasService: PizzasService) {}

  @Mutation(() => Pizza)
  protected async create(
    @Args(CreatePizzaDto.KEY) createPizzaDto: CreatePizzaDto,
  ) {
    return await this.pizzasService.create(createPizzaDto);
  }

  @Query(() => Pizza)
  async getById(@Args('id') id: string) {
    return await this.pizzasService.getById(id);
  }

  @Mutation(() => Pizza)
  async update(@Args(UpdatePizzaDto.KEY) updatePizzaDto: UpdatePizzaDto) {
    return await this.pizzasService.update(
      updatePizzaDto.filter,
      updatePizzaDto,
    );
  }
}
