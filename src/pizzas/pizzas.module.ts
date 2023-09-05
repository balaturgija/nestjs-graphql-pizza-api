import { Module } from '@nestjs/common';

import { PizzasRepository } from './pizzas.repository';
import { PizzasResolver } from './pizzas.resolver';
import { PizzasService } from './pizzas.service';

@Module({
  providers: [PizzasResolver, PizzasService, PizzasRepository],
})
export class PizzasModule {}
