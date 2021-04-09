import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
export interface VolunteerAttributes {
  id: number;
  date: string;
  hours: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface VolunteerModel extends Model<VolunteerAttributes>, VolunteerAttributes {}
export class Volunteer extends Model<VolunteerModel, VolunteerAttributes> {}
export type VolunteerStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): VolunteerModel;
};

export function VolunteerFactory (sequelize: Sequelize): VolunteerStatic {
    return <VolunteerStatic>sequelize.define("volunteer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            unique: true,
        },
        hours: {
            type: DataTypes.DECIMAL,
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