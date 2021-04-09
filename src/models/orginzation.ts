import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface OrganizationAttributes {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface OrganizationModel extends Model<OrganizationAttributes>, OrganizationAttributes {}
export class Organization extends Model<OrganizationModel, OrganizationAttributes> {}

export type OrganizationStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): OrganizationModel;
};

export function OrganizationFactory (sequelize: Sequelize): OrganizationStatic {
  return <OrganizationStatic>sequelize.define("organization", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
      },
      updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
      },
  });
}