import { Injectable } from '@nestjs/common';

import { CreatePizzaDto, FilterPizza, UpdatePizzaDto } from './dto';
import { PizzaEntity } from './entities';

@Injectable()
export class PizzasRepository {
  async create(createPizzaDto: CreatePizzaDto) {
    return await PizzaEntity.create(createPizzaDto);
  }

  async getById(id: string) {
    return await PizzaEntity.findByPk(id);
  }

  async update(filter: FilterPizza, input: UpdatePizzaDto) {
    return await PizzaEntity.update({ ...input }, { where: { ...filter } });
  }
}
