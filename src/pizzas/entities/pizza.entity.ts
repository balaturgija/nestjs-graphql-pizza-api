import { randomUUID } from 'crypto';
import { DataTypes } from 'sequelize';
import {
  AllowNull,
  Column,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'pizzas',
  underscored: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  paranoid: true,
})
export class PizzaEntity extends Model<PizzaEntity> {
  @PrimaryKey
  @IsUUID(4)
  @Column({
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: () => randomUUID(),
  })
  id: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.TEXT,
  })
  name: string;
}
