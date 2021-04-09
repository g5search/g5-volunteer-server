import * as sequelize from 'sequelize';
import {UserFactory} from "./user-model";
import {OrganizationFactory} from "./orginzation";
const {
  DATABASE_URL: dbUrl
} = process.env
if (!dbUrl) {
  throw new Error('DATABASE_URL is not set')
}
export const dbConfig = new sequelize.Sequelize(dbUrl);
// THIS ONES ARE THE ONES YOU NEED TO USE ON YOUR CONTROLLERS
export const User = UserFactory(dbConfig)

// THIS ONES ARE THE ONES YOU NEED TO USE ON YOUR CONTROLLERS
export const orgnizations = OrganizationFactory(dbConfig)

// User.hasMany(Skills);