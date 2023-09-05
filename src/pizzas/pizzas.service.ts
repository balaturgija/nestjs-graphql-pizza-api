import { Injectable } from '@nestjs/common';

import { CreatePizzaDto, FilterPizza, UpdatePizzaDto } from './dto';
import { PizzasRepository } from './pizzas.repository';

@Injectable()
export class PizzasService {
  constructor(private readonly pizzasRepository: PizzasRepository) {}

  async create(createPizzaDto: CreatePizzaDto) {
    return await this.pizzasRepository.create(createPizzaDto);
  }

  async getById(id: string) {
    return await this.pizzasRepository.getById(id);
  }

  async update(filter: FilterPizza, input: UpdatePizzaDto) {
    await this.pizzasRepository.update(filter, input);
    return await this.pizzasRepository.getByFilter(filter);
  }

  async remove(filter: FilterPizza) {
    const result = await this.pizzasRepository.getByFilter(filter);
    await this.pizzasRepository.remove(filter);
    return result;
  }
}
