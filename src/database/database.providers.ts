import { Sequelize } from 'sequelize-typescript';

import { PizzaEntity } from '~modules/pizzas';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        models: [PizzaEntity],
        define: {
          underscored: true,
          paranoid: true,
        },
      });

      try {
        await sequelize.authenticate();
        return sequelize;
      } catch (error) {
        throw new Error(error.name);
      }
    },
  },
];
