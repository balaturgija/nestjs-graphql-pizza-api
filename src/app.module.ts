import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { DatabaseModule } from '~modules/database';
import { PizzasModule } from '~modules/pizzas';

import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // code first aproach
      // dynamic
      // autoSchemaFile: true,
      // generate file
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    DatabaseModule,
    PizzasModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
